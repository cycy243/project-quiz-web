import type { User } from '../domain/user'

export default interface AuthService {
  registerUser(user: User): Promise<boolean>
}
