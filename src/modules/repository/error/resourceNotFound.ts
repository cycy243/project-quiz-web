import BaseError from '../error/baseError'

export default class ResourceNotFound extends BaseError {
  constructor(message: string) {
    super(message)
  }
}
