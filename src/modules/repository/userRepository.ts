import type { RegisterDTO } from '../dto/registerDto'
import type { UserDTO } from '../dto/userDto'

export default interface UserRegisterRepository {
  register(user: RegisterDTO): Promise<UserDTO>
}
