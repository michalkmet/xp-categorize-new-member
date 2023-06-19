const openOrSenior = require('./categorize-new-member');

describe('openOrSenior', () => {
  it('return exception when given incorrect data', () => {
    expect(openOrSenior).toThrow(new Error('wrong input'));
  });
});
