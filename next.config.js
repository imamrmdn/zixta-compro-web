/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'id-ID'],
    defaultLocale: 'id-ID',
    localeDetection: false
  },
}

module.exports = nextConfig
