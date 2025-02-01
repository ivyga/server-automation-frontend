import type { Config } from "jest";

// NOTE: Jest configuration object with TypeScript support
const config: Config = {
  preset: "ts-jest", // Uses `ts-jest` to transpile TypeScript files for testing.
  testEnvironment: "jsdom", // Simulates a browser-like environment for testing React components or DOM interactions.
  transform: {
    // Transforms TypeScript files using `ts-jest`, specifying a custom TypeScript config file (`tsconfig.test.json`).
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Runs additional setup after the test framework is installed (e.g., mocking, global configurations).
};

export default config;
