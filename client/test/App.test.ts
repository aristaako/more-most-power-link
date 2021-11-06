describe('More most power link e2e tests', function () {
  test('More most power link opens', function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .assert.titleContains(browser.globals.title)
      .waitForElementVisible('h1')
      .assert.containsText('h1', browser.globals.title)
      .assert.containsText(
        'h2',
        'Find out which link station has the strongest signal power at given point.'
      )
      .end()
  })
  describe('Finding out the station with the strongest signal power', function () {
    const findOutButton = 'button[id=find-out-power-button]'
    const searchResultText = 'p[id=search-result]'
    test('for default coordinates 0,0, the result is a station at 0,0', function (browser) {
      browser
        .url(browser.launch_url)
        .waitForElementVisible('body')
        .waitForElementVisible(findOutButton)
        .click(findOutButton)
        .waitForElementVisible(searchResultText)
        .assert.containsText(
          searchResultText,
          'Best link station for point 0,0 is 0,0 with power 100'
        )
        .end()
    })
    test('for coordinates 18,18, the result is a station at 20,20', function (browser) {
      const clearInput = [browser.Keys.CONTROL, 'a', browser.Keys.DELETE]
      const xCoordinateInput = 'input[id=input-x]'
      const yCoordinateInput = 'input[id=input-y]'
      browser
        .url(browser.launch_url)
        .waitForElementVisible('body')
        .waitForElementVisible(xCoordinateInput)
        .waitForElementVisible(yCoordinateInput)
        .setValue(xCoordinateInput, clearInput)
        .setValue(yCoordinateInput, clearInput)
        .setValue(xCoordinateInput, 18)
        .setValue(yCoordinateInput, 18)
        .waitForElementVisible(findOutButton)
        .click(findOutButton)
        .waitForElementVisible(searchResultText)
        .assert.containsText(
          searchResultText,
          'Best link station for point 18,18 is 20,20 with power 4.84'
        )
        .end()
    })
  })
})
