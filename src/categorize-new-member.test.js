const openOrSenior = require('./categorize-new-member');

describe('openOrSenior', () => {
  it('return exception when given incorrect data', () => {
    expect(openOrSenior).toThrow(new Error('wrong input'));
  });
  it('return return ["Open"] when given [[20,20]]', () => {
    expect(openOrSenior([[20,20]])).toEqual(["Open"]);
  });
  it('return return ["Open"] when given [[20,0]]', () => {
    expect(openOrSenior([[20,0]])).toEqual(["Open"]);
  });
});
