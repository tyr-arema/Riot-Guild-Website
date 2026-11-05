const { defineConfig, devices } = require('@playwright/test');

const chromium = devices['Desktop Chrome'];

module.exports = defineConfig({
  testDir: './tests',
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  workers: 1,
  use: { baseURL: 'http://localhost:8000' },
  webServer: {
    command: 'python3 -m http.server 8000',
    url: 'http://localhost:8000/',
    reuseExistingServer: true,
  },
  projects: [
    { name: 'desktop-1440', use: { ...chromium, viewport: { width: 1440, height: 900 } } },
    { name: 'tablet-900', use: { ...chromium, viewport: { width: 900, height: 1000 } } },
    { name: 'phone-375', use: { ...chromium, viewport: { width: 375, height: 812 } } },
  ],
});
