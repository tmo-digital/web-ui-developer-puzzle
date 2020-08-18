require('ts-node').register({
  transpileOnly: true,
  pretty: true,
  project: require('path').join(__dirname, 'tsconfig.json')
});
require('tsconfig-paths').register();

const protractor = require('protractor');

// Update click to have a 200 ms delay so the app has a chance to update UI.
// e.g. reducer update, XHRs, etc.
const _click = protractor.WebElement.prototype.click;
protractor.WebElement.prototype.click = function(...args) {
  return _click.call(this, args).then(() => protractor.browser.sleep(500));
};

exports.config = {
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--allow-insecure-localhost']
    }
  },
  acceptInsecureCerts: true,
  waitForTimeout: 90000,
  allScriptsTimeout: 90000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  onPrepare() {
    // Slow down the tests so reviewers can keep up.
    const origFn = protractor.browser.driver.controlFlow().execute;
    protractor.browser.driver.controlFlow().execute = function() {
      const args = arguments;
      origFn.call(protractor.browser.driver.controlFlow(), () => protractor.promise.delayed(100)
      );
      return origFn.apply(protractor.browser.driver.controlFlow(), args);
    };

    return Promise.all([
      protractor.browser.driver
        .manage()
        .window()
        .setSize(1200, 900)
    ]);
  },
  onComplete() {
    // Keep browser session alive for 3 seconds for reviewers to see result before close.
    return new Promise(res => setTimeout(res, 3000))
  },
  specs: [
    './src/specs/reading-list.spec.ts',
    './src/specs/search-books.spec.ts'
  ]
};
