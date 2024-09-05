import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils";

export default function App() {
	const queryClient = getQueryClient();

	return <HydrationBoundary state={dehydrate(queryClient)}>Home</HydrationBoundary>;
}
