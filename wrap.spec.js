const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns a string already less than the max length', () => {
    expect(wrap('Mewl for food at 4am.', 25)).to.equal('Mewl for food at 4am.');
  });
  it('Returns a string spaced accoringly, which breaks on the space as close to the max length as possible', () => {
    expect(
      wrap(
        `Step on your keyboard while youre gaming and then turn in a circle chew iPad power cord, and shove bum in owners face like camera lens i can haz.`,
        20
      )
    ).to.equal(`Step on your
    \nkeyboard while
    \nyoure gaming and
    \nthen turn in a
    \ncircle chew iPad
    \npower cord, and
    \nshove bum in owners
    \nface like camera
    \nlens i can haz.`);
  });
});
