/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/resume',
                destination: '/akash-resume.pdf',
                permanent: false,
            },
            {
                source: '/in',
                destination: 'https://www.linkedin.com/in/akash202k/',
                permanent: false,
            },
            {
                source: '/x',
                destination: 'https://www.x.com/akash202k_/',
                permanent: false,
            },
            {
                source: '/github',
                destination: 'https://www.github.com/akash202k/',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
