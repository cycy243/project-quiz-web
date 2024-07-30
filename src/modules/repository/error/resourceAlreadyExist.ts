import BaseError from '../error/baseError'

export default class ResourceAlreadyExist extends BaseError {
  constructor(message: string) {
    super(message)
  }
}
