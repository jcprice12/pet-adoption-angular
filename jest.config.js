const config = {
  preset: 'jest-preset-angular',
  transformIgnorePatterns: [
    'node_modules/(?!(@angular|rxjs)/)'
  ],
  testMatch: ["**/src/**/*.spec.ts"]
}
// angular is literally the worst
// https://stackoverflow.com/questions/69882564/jest-error-cannot-set-base-providers-after-angular-v13-upgrade-using-ng-test
if (!process.argv.some((item) => item.includes('@angular\\cli\\bin\\ng'))) {
  config.setupFilesAfterEnv = ["<rootDir>/setup-jest.ts"];
}
module.exports = config