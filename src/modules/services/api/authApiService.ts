import type { User } from '@/modules/domain/user'
import type AuthService from '../authService'
import ServiceError from '../error/serviceError'
import userMapper from '@/modules/mappers/userMapper'
import BaseError from '@/modules/repository/error/baseError'
import type { RegisterDTO } from '@/modules/dto/registerDto'
import type UserRegisterRepository from '@/modules/repository/iUserAuthRepository'

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

  async loginWithLogin(login: string, password: string): Promise<User | null> {
    try {
      const result = userMapper.toEntity(await this.registerRepo.loginWithPseudo(login, password))
      return result
    } catch (error) {
      if (error instanceof BaseError) {
        throw new ServiceError(error.message)
      }
      throw new ServiceError('An unexpected error occured')
    }
  }
}
