const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
	  on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
	  on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
            launchOptions.args.push('--window-size=1920,1080');
            launchOptions.args.push('--force-device-scale-factor=1');
            launchOptions.args.push('--start-fullscreen');
        }
        return launchOptions;
      });
    },
  },
});
