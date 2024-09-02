// @ts-check
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: {
		buildActivityPosition: 'bottom-left'
	},
	distDir: 'build',
	experimental: {
		cssChunking: 'loose'
	},
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		return config;
	}
};

export default bundleAnalyzer(nextConfig);
