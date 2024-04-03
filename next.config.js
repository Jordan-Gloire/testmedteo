// module.exports = {
//     images: {
//         domains: ['openweathermap.org'],
//     },
// };
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '',
      },
    ],
  },
}