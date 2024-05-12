/** @type {import('next').NextConfig} */
const nextConfig = {
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
		],
	},
}

export default nextConfig
