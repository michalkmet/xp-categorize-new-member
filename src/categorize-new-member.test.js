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
  it('return return ["Senior"] when given [[56,8]]', () => {
    expect(openOrSenior([[56,8]])).toEqual(["Senior"]);
  });
  it('return return ["Open","Senior"] when given [[58,0][56,8]]', () => {
    expect(openOrSenior([[58,0],[56,8]])).toEqual(["Open","Senior"]);
  });
});
