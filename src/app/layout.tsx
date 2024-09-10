import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Footer, Header, Main } from "@/components";
import { Providers } from "@/providers";
import "./_styles/globals.css";

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["300", "500", "700"],
	style: ["normal", "italic"],
	variable: "--dm-sans",
});

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
			<body className={dmSans.className}>
				<Providers>
					<Header />
					<Main>{children}</Main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
