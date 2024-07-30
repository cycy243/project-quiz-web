import type { User } from '../domain/user'
import type { UserDTO } from '../dto/userDto'

function toDto(user: User): UserDTO {
  return {
    bio: user.bio?.toString() || null,
    birthDate: '28/02/2001',
    name: user.name?.toString() || null,
    firstname: user.firstname?.toString() || null,
    email: user.email?.toString() || null,
    pseudo: user.pseudo?.toString() || null,
    profilePicUri: user.profilePicUri?.toString() || null,
    password: user.password
  }
}

function toEntity(user: UserDTO): User {
  return {
    bio: user.bio || '',
    birthDate: new Date(user.birthDate!) || new Date(),
    name: user.name || '',
    firstname: user.firstname || '',
    email: user.email || '',
    pseudo: user.pseudo || '',
    profilePicUri: user.profilePicUri || '',
    password: user.password || ''
  }
}

export default { toDto, toEntity }
