import type { User } from '@/modules/domain/user'
import type AuthService from '../authService'
import ServiceError from '../error/serviceError'
import type UserRegisterRepository from '@/modules/repository/userRepository'
import userMapper from '@/modules/mappers/userMapper'
import BaseError from '@/modules/repository/error/baseError'
import type { RegisterDTO } from '@/modules/dto/registerDto'

export default class AuthApiService implements AuthService {
  constructor(private registerRepo: UserRegisterRepository) {}

  async registerUser(user: RegisterDTO): Promise<boolean> {
    try {
      return (
        (await this.registerRepo.register({
          ...user,
          birthDate: user.birthDate.replace('-', '/')
        })) !== undefined
      )
    } catch (error) {
      if (error instanceof BaseError) {
        throw new ServiceError(error.message)
      }
      throw new ServiceError('An unexpected error occured')
    }
  }
}
