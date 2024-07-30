import type { UserDTO } from '../dto/userDto'

export default interface UserRegisterRepository {
  register(user: UserDTO): Promise<UserDTO>
}
