import React from "react";
import { useRouter } from "next/navigation";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useQuery, dehydrate, HydrationBoundaryProps } from "@tanstack/react-query";
import { testIds } from "src/app/_components/Select/Select.test-ids";
import Home from "./page";

// Mock the required modules
jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
	useQuery: jest.fn(),
	HydrationBoundary: ({ children }: HydrationBoundaryProps) => <React.Fragment>{children}</React.Fragment>,
	dehydrate: jest.fn(),
}));

jest.mock("./_lib", () => ({
	getPosts: jest.fn(),
	getQueryClient: jest.fn(),
	queryKeys: {
		POSTS: {
			LIST: "posts-list-key",
		},
	},
}));

describe("Home Component", () => {
	const mockPush = jest.fn();
	const mockPosts = [
		{ id: "1", value: "1", label: "Post #1: First Post" },
		{ id: "2", value: "2", label: "Post #2: Second Post" },
	];

	beforeEach(() => {
		window.HTMLElement.prototype.scrollIntoView = jest.fn();

		// Mock the useRouter to provide a mock push function
		(useRouter as jest.Mock).mockReturnValue({
			push: mockPush,
		});

		// Mock the useQuery hook to return mock data
		(useQuery as jest.Mock).mockReturnValue({
			data: mockPosts,
		});

		// Mock the dehydrate function
		(dehydrate as jest.Mock).mockReturnValue({});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders the heading and subheading", () => {
		render(<Home />);

		const heading = screen.getByText(/Create\./i);
		const subheading = screen.getByText(/Start creating today!/i);

		expect(heading).toBeInTheDocument();
		expect(subheading).toBeInTheDocument();
	});

	it("renders the Select component with items", async () => {
		render(<Home />);

		const trigger = screen.getByTestId(testIds.trigger);
		expect(trigger).toBeInTheDocument();

		fireEvent.click(trigger);

		await waitFor(() => {
			expect(screen.queryByTestId(testIds.dropdown)).toBeInTheDocument();

			const items = screen.queryAllByTestId(testIds.selectItem);
			expect(items).toHaveLength(mockPosts.length);

			mockPosts.forEach(post => {
				expect(screen.getByText(post.label)).toBeInTheDocument();
			});
		});
	});
});
