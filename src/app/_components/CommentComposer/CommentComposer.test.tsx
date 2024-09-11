import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CommentComposer from "./CommentComposer";

jest.mock("@tanstack/react-query", () => ({
	useMutation: jest.fn(),
	useQueryClient: jest.fn(),
}));

describe("CommentComposer Component", () => {
	const postId = 1;
	const mockMutate = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
		(useMutation as jest.Mock).mockReturnValue({
			mutate: mockMutate,
			isPending: false,
			isError: false,
			isSuccess: false,
		});
		(useQueryClient as jest.Mock).mockReturnValue({
			invalidateQueries: jest.fn(),
		});
	});

	it("renders the comment form and handles successful submission", async () => {
		render(<CommentComposer postId={postId} />);

		const nameInput = screen.getByPlaceholderText("Name");
		const emailInput = screen.getByPlaceholderText("Email");
		const commentInput = screen.getByPlaceholderText("Your comment");
		const submitButton = screen.getByRole("button", { name: /Post/i });

		fireEvent.change(nameInput, { target: { value: "Richie Davis" } });
		fireEvent.change(emailInput, { target: { value: "richie@d.com" } });
		fireEvent.change(commentInput, { target: { value: "This is a test comment" } });

		fireEvent.click(submitButton);

		await waitFor(() =>
			expect(mockMutate).toHaveBeenCalledWith({
				postId: postId,
				name: "Richie Davis",
				email: "richie@d.com",
				body: "This is a test comment",
			})
		);
	});

	it("displays error message when form submission fails", async () => {
		(useMutation as jest.Mock).mockReturnValueOnce({
			mutate: mockMutate,
			isPending: false,
			isError: true,
			error: { message: "Network error" },
			isSuccess: false,
		});

		render(<CommentComposer postId={postId} />);

		const submitButton = screen.getByRole("button", { name: /Post/i });
		fireEvent.click(submitButton);

		expect(await screen.findByText("An error occurred posting your comment: Network error")).toBeInTheDocument();
	});
});
