'use strict';

const middy = require('@middy/core');

const hello = async (event) => {
  return { message: 'Hello from your JS template!', event };
};

module.exports = {
  hello: middy(hello),
};
