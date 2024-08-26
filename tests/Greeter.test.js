const { Greeter } = require('../Greeter');

describe('Greeter', () => {
  test('should throw an error when instantiated directly', () => {
    expect(() => new Greeter().greet('test')).toThrow('greet() must be implemented');
  });
});
