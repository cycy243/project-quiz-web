import type { User } from '../domain/user'
import type { RegisterDTO } from '../dto/registerDto'

export default interface AuthService {
  registerUser(user: RegisterDTO): Promise<boolean>
  loginWithLogin(login: string, password: string): Promise<User | null>
}
