import type { UserDTO } from '@/modules/dto/userDto'
import ResourceAlreadyExist from '../error/resourceAlreadyExist'
import BadRequest from '../error/badRequest'

import { type Response } from 'redaxios'
import type UserRegisterRepository from '../userRepository'

export default class UserRegisterApiRepository implements UserRegisterRepository {
  constructor(private readaxios: any) {}

  async register(user: UserDTO): Promise<UserDTO> {
    try {
      const response: Response<UserDTO> = await this.readaxios.post('/auth', user)
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
