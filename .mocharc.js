module.exports = {
    reporter: 'mochawesome',
    reporterOptions: 'json=false,reportDir=report,reportFilename=automacao-api',
    require: 'utils/global.js',
    spec: ["test/**/*.test.js"]
  }