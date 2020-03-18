module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            { pattern: 'src/**/*ts' },
        ],
        exclude: [],
        preprocessors: {
            '**/*.ts': ['karma-typescript'],
        },
        reporters: ['progress', 'karma-typescript'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        karmaTypescriptConfig: {
            tsconfig: 'tsconfig.json',
        },
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-typescript',
        ],
    });
};
