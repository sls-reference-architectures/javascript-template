describe('Aristotle says', () => {
  it('A is A', () => {
    expect('A').toBe('A');
  });
});

describe('Using jest-extended assertion', () => {
  it('should execute', () => {
    expect().pass('jest-extended is working');
  })
});