import BaseError from '../error/baseError'

export default class BadRequest extends BaseError {
  constructor(message: string) {
    super(message)
  }
}
