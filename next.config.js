/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      /**
       * 1. next/image-types/global에 any로 선언된 .svg 타입을 피하기 위해
       * 2. url로 사용할 수 있도록
       *
       * @see https://react-svgr.com/docs/webpack/#using-with-url-loader-or-file-loader
       */
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
}
