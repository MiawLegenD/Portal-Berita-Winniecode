export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/resources/js/$1',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
