/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.png$": "jest-file-loader",
    "\\.jpg$": "jest-file-loader",
    "\\.jpeg$": "jest-file-loader"
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  }
};