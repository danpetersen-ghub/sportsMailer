const ts_preset = require('ts-jest/jest-preset')
const puppeteer_preset = require('jest-puppeteer/jest-preset')

module.exports = {
    preset: 'jest-puppeteer',
    testMatch: ["**/?(*.)+(spec|test).[t]s"],
    testPathIgnorePatterns: ['/node_modules/', 'dist'], // 
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    // globalSetup: './jest.global-setup.ts', // will be called once before all tests are executed
    // globalTeardown: './jest.global-teardown.ts' // will be called once after all tests are executed
    roots: ['tests'],
};