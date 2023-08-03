/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir:true,
    },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/12825186/pexels-photo-12825186.png',
          },
        ],
      }
}




module.exports = nextConfig
