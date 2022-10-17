const middy = require('@middy/core');
const Logger = require('@dazn/lambda-powertools-logger');

const hello = async (event) => {
  Logger.debug('In hello()');
  
  return { message: 'Hello from your JS template!', event };
};

module.exports = {
  hello: middy(hello),
};
