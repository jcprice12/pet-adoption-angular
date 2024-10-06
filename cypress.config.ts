import { defineConfig } from 'cypress';
import { customSetupNodeEvents } from './cypress/plugins';

export default defineConfig({
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  e2e: {
    setupNodeEvents(on, config) {
      return customSetupNodeEvents(on, config);
    },
    baseUrl: 'http://localhost:4200',
  },
});
