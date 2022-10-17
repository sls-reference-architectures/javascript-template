'use strict';

const hello = async (event) => {
  return { message: 'Hello from your JS template!', event };
};

module.exports = hello;
