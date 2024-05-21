/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
};

export default config;
