import type { RegisterDTO } from '@/modules/dto/registerDto'
import ResourceAlreadyExist from '../error/resourceAlreadyExist'
import BadRequest from '../error/badRequest'

import { type Response } from 'redaxios'
import type UserRegisterRepository from '../userRepository'
import type { UserDTO } from '@/modules/dto/userDto'

export default class UserRegisterApiRepository implements UserRegisterRepository {
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
}
