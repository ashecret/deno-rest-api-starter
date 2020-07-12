import { Status, isHttpError } from '../deps.ts'
export default async ({ response }: any, next: () => Promise<void>) => {
  try {
    await next()
  } catch (err) {
    console.log('err', err)
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.NotFound:
          response.status = Status.NotFound
          response.body = { message: 'Not Found' }
          break;
        default:
          response.status = 400
          response.body = { message: 'Request can not be processed currently' }
      }
    } else {
      response.status = 500
      response.body = { message: 'Internal server error' }
    }
  }
}
