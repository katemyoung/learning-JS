const candies = require('./candies');

describe ('addToBatch', () => {
  it('adds 3 to [1,2])', () => {
    expect(addToBatch([1,2],3)).toBe([1,2,3])
  });
});