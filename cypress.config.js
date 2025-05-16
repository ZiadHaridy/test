const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const path = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com",
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    async setupNodeEvents(on, config) {
      // Add the cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Use esbuild bundler with cucumber plugin
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    // Set default viewport size
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
