const helloWorld = require('../src/helloWorld');

// Use INT tests to invoke handlers and let them call AWS resources
describe('When invoking helloWorld', () => {
  it('should return a message', async () => {
    // ARRANGE
    const event = { answer: 42 };

    // ACT
    const result = await helloWorld(event);

    // ASSERT
    expect(result.message).toInclude('Hello');
    expect(result.event.answer).toEqual(42);
  });
});
