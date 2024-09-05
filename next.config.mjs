/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:'export',
    typescript:{
        ignoreBuildErrors: true,
    },
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lovely-flamingo-139.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'fast-manatee-464.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com'
            },
        ]
    }
};

export default nextConfig;
