import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "@/providers";
import "./_styles/globals.scss";

const font = localFont({ src: "../public/Wotfard-Regular.otf", display: "swap", variable: "--wotfard" });

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
			<body className={font.className}>
				<Providers>
					{/* <header></header> */}
					<main role='main'>{children}</main>
					{/* <footer></footer> */}
				</Providers>
			</body>
		</html>
	);
}
