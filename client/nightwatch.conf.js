const desktopBrowserSize = 'window-size=1680,1050'

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test'],

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: 'node_modules/.bin/chromedriver',
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ]
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [desktopBrowserSize]
        }
      },
      globals: {
        title: 'More Most Power Link'
      }
    }
  }
}
