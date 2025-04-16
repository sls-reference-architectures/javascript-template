import middy from '@middy/core'
import Logger from '@dazn/lambda-powertools-logger'

const hello = async (event) => {
  Logger.debug('In handler hello()')
  const returnEvent = { ...event, foo: 'bar' };

  return returnEvent;
}
export const helloHandler = middy(hello)

export const placeHolder = () => { }
``