// @ts-check
import { resolve } from "path";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: {
		buildActivityPosition: "bottom-left",
	},
	distDir: "build",
	experimental: {
		cssChunking: "loose",
	},
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	swcMinify: true,
	webpack: config => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@/components": resolve("./src/app/_components"),
			"@/hooks": resolve("./src/app/_hooks"),
			"@/lib": resolve("./src/app/_lib"),
			"@/providers": resolve("./src/app/_providers"),
			"@/styles": resolve("./src/app/_styles"),
			"@/types": resolve("./src/app/_types"),
		};

		return config;
	},
};

export default bundleAnalyzer(nextConfig);
