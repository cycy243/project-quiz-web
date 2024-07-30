import type { User } from '@/modules/domain/user'
import type AuthService from '../authService'
import ServiceError from '../error/serviceError'
import type UserRegisterRepository from '@/modules/repository/userRepository'
import userMapper from '@/modules/mappers/userMapper'
import BaseError from '@/modules/repository/error/baseError'

export default class AuthApiService implements AuthService {
  constructor(private registerRepo: UserRegisterRepository) {}

  async registerUser(user: User): Promise<boolean> {
    try {
      return await this.registerRepo.register(userMapper.toDto(user))
    } catch (error) {
      if (error instanceof BaseError) {
        throw new ServiceError(error.message)
      }
      throw new ServiceError('Error while contacting the server')
    }
  }
}
