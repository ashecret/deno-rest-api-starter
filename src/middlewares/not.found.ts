import { Status } from '../deps.ts'

export default ({ response }: any) => {
  response.status = Status.NotFound
  response.body = {
    message: 'Not found',
  }
}
