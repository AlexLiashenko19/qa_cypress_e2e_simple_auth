const { defineConfig } = require('cypress');

module.exports = defineConfig({
  baseUrl: 'https://the-internet.herokuapp.com/login',
  e2e: {
    setupNodeEvents(on, config) {
    }
  }
});
