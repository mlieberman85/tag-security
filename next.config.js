module.exports = {
  distDir: 'build',
  errorOnExists: false,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
}
