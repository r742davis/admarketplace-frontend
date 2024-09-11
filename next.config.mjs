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
		"@/lib/api": {
			transform: "@/lib/api/{{member}}",
			skipDefaultConversion: true,
		},
		"@/lib/utils": {
			transform: "@/lib/utils/{{member}}",
			skipDefaultConversion: true,
		},
	},
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	swcMinify: true,
	webpack: config => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@/components": resolve("./src/app/_components"),
			"@/components/layout": resolve("./src/app/_components/_layout"),
			"@/hooks": resolve("./src/app/_hooks"),
			"@/lib/api": resolve("./src/app/_lib/api"),
			"@/lib/constants": resolve("./src/app/_lib/constants"),
			"@/lib/utils": resolve("./src/app/_lib/utils"),
			"@/providers": resolve("./src/app/_providers"),
			"@/styles": resolve("./src/app/_styles"),
			"@/types": resolve("./src/app/_types"),
		};

		return config;
	},
};

export default bundleAnalyzer(nextConfig);
