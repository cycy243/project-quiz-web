import type { RegisterDTO } from '@/modules/dto/registerDto'
import ResourceAlreadyExist from '../error/resourceAlreadyExist'
import BadRequest from '../error/badRequest'

import { type Response } from 'redaxios'
import type IUserAuthRepository from '../iUserAuthRepository'
import type { UserDTO } from '@/modules/dto/userDto'
import { password } from '@/modules/validation/rules'

export default class UserAuthApiRepository implements IUserAuthRepository {
  constructor(private readaxios: any) {}

  async register(user: RegisterDTO): Promise<UserDTO> {
    try {
      const formData = new FormData()
      Object.keys(user).forEach((key) => formData.append(key, user[key]))
      const response: Response<UserDTO> = await this.readaxios.post('/auth', formData)
      return response.data
    } catch (error) {
      if ((error as any).status === 409) {
        throw new ResourceAlreadyExist('A user with the same mail or email already exist')
      }
      if ((error as any).status === 400) {
        throw new BadRequest("One or multiple p field weren't correctly formatted")
      }
      throw new Error('No response from the server')
    }
  }

  async loginWithPseudo(login: string, password: string): Promise<UserDTO> {
    try {
      const response: Response<UserDTO> = await this.readaxios.post('/auth/connect', {
        login,
        password
      })
      return response.data
    } catch (error) {
      if ((error as any).status === 404) {
        throw new ResourceAlreadyExist('User not found')
      }
      if ((error as any).status === 400) {
        throw new BadRequest("One or multiple p field weren't correctly formatted")
      }
      throw new Error('No response from the server')
    }
  }
}
