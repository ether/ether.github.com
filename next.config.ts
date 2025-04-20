/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    images: {
        unoptimized: true
    },
    rewrites: async () => {
        return [
            {
                source: '/plugins.viewer.json',
                destination: 'https://static.etherpad.org/plugins.viewer.json',
            },
            {
                source: '/server-stats.json',
                destination: 'https://static.etherpad.org/server-stats.json',
            }
        ]
    }
}

export default nextConfig
