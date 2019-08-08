const npmPackage = require('../src/index')

test('Test file works fine', () => {
    expect(!npmPackage).toBeFalsy();
});