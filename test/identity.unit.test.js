import Logger from '@dazn/lambda-powertools-logger';

describe('Aristotle says', () => {
  it('A is A', () => {
    Logger.debug('import is working in jest test');
    expect('A').toBe('A');
  });
});

describe('Using jest-extended assertion', () => {
  it('should execute', () => {
    expect().pass('jest-extended is working');
  });
});
