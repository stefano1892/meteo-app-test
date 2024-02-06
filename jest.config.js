module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },

    moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },

    testEnvironment: 'jsdom',
};