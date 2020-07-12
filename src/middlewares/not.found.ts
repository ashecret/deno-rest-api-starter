import { Context, Status } from '../deps.ts'

export default ({ response }: Context) => {
  response.status = Status.NotFound
  response.body = {
    message: 'Not found',
  }
}
