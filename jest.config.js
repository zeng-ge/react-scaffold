/**
 * jest是一个测试框架,类似于jasmine
 * */
module.exports = {
  verbose: true,
  collectCoverage: false,
  roots: ['./src'],//用来扫描测试文件与源文件的路径
  testRegex: '.*\\.test\\.js$',
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '\\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl|svg)$': '<rootDir>/test/testMock.js'
  },
  setupFiles: [
    '<rootDir>/test/setup.js',
    '<rootDir>/test/enzyme.js'
  ]
  // setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',这个只能配一个,setup要在enzyme前面加载时不好配置
};