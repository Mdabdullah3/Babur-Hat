/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'maraviyainfotech.com',
            'images.pexels.com',
            'images.unsplash.com',
            '754969b0.rocketcdn.me',
            'minimog.thememove.com',
            'secure.gravatar.com',
            'img.daisyui.com',
            'i.ibb.co',
            'minimog-4437.kxcdn.com',
            'ae01.alicdn.com',
            'tf.quomodosoft.com',
            'i.ibb.co'
        ],
    },
    env: {
        GOOGLE_ID: process.env.GOOGLE_ID,
        GOOGLE_SECRET: process.env.GOOGLE_SECRET,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
};

module.exports = nextConfig;
