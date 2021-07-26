module.exports = {
    reporter: 'mochawesome',
    reporterOptions: 'json=false,reportDir=report,reportFilename=index',
    require: 'utils/global.js',
    spec: ["test/**/*.test.js"]
  }