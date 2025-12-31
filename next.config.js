module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
      rules: {
        '*.md': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
      },
  },
};