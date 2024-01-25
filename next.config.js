/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/:path*"
            : "/api/",
      },
    ];
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  webpack(config, { dev, isServer }) {
    
    if (!dev && !isServer) {
      config.devtool = 'source-map';
    }

    // Add MP3 file loader configuration
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/sounds', // adjust the output path as needed
            publicPath: '/_next/static/sounds', // adjust the public path as needed
            name: '[name].[ext]',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },

};

module.exports = nextConfig;
