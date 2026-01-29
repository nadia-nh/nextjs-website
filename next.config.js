/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Explicitly enable Turbopack (default in Next 16) without custom webpack overrides
    turbopack: {}
};

module.exports = nextConfig;
