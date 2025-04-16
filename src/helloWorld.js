import middy from '@middy/core';
import Logger from '@dazn/lambda-powertools-logger';

const hello = async (event) => {
  Logger.debug('In handler hello()');
  printer('word');
  const returnEvent = { ...event, foo: 'bar' };

  return returnEvent;
};

const printer = (name) => console.log(`Hello ${name}!`);
export const helloHandler = middy(hello);
