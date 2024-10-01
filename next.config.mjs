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
		optimizePackageImports: ["@tanstack/react-query"],
	},
	modularizeImports: {
		"@/hooks": {
			transform: "@/hooks/{{member}}",
			skipDefaultConversion: true,
		},
	},
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: ["@richie/components"],
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@/providers": resolve("./app/_providers"),
			"@/styles": resolve("./app/_styles"),
			"@/types": resolve("./app/_types"),
		};

		return config;
	},
};

export default bundleAnalyzer(nextConfig);
