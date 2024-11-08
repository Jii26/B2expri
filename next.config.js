/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.app.goo.gl'],
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    // Add rule for handling JS files
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    })

    return config
  }
};

module.exports = nextConfig;