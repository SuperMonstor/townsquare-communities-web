/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		serverComponentsExternalPackages: ["mongoose"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.clerk.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "images.clerk.dev",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "uploadthing.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "placehold.co",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "utfs.io",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
