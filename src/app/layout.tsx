import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/providers";
import "./_styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Postr",
	description: "A little Post app for adMarketplace",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					{/* <header></header> */}
					<main role='main'>{children}</main>
					{/* <footer></footer> */}
				</Providers>
			</body>
		</html>
	);
}
