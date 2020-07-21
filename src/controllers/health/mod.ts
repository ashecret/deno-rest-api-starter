import { RouterContext } from '../../deps.ts'
export default ({ response }: RouterContext) => {
  response.body = {
    status: 'OK',
    message: 'Server running!!'
  }
}
