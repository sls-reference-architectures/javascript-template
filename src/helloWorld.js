import middy from '@middy/core';
import Logger from '@dazn/lambda-powertools-logger';

const hello = async (event) => {
  Logger.debug('In handler hello()');

  return { message: 'Hello from your JS template!', event };
};

export default middy(hello);
