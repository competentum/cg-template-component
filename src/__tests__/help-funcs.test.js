/* eslint-disable no-magic-numbers */
const helpFuncs = require('./../help-funcs').default;

describe('Help functions:', () => {

  describe('sum', () => {
    test('should calculate right value', () => {
      expect(helpFuncs.sum(15, 2)).toBe(17);
    });
  });
});
