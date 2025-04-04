/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/resume',
                destination: '/akash-resume.pdf',
                permanent: false,
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/in',
                destination: 'https://www.linkedin.com/in/akash202k/',
                permanent: false,
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/x',
                destination: 'https://www.x.com/akash202k_/',
                permanent: false,
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/github',
                destination: 'https://www.github.com/akash202k/',
                permanent: false,
            },
        ]
    },

}

module.exports = nextConfig
