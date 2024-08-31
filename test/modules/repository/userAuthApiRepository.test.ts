import { beforeEach, describe, expect, it, vi } from 'vitest'
import UserRegisterRepository from '../../../src/modules/repository/iUserAuthRepository'
import UserAuthApiRepository from '../../../src/modules/repository/api/userAuthApiRepository'

import axios from 'redaxios'
import { fail } from 'assert'
import ResourceNotFound from '../../../src/modules/repository/error/resourceNotFound'

vi.mock('redaxios')

describe('UserAuthApiRepository', () => {
  describe('connect user', () => {
    let axiosInstance: any
    let userAuthApiRepository: UserRegisterRepository

    beforeEach(() => {
      axiosInstance = { post: vi.fn() }
      console.log(axiosInstance)

      userAuthApiRepository = new UserAuthApiRepository(axiosInstance)
    })

    it('when user exist then return a user', async () => {
      axiosInstance.post.mockResolvedValue({
        data: {
          email: 'fcmsdlklkmdgjf'
        }
      })
      const user = await userAuthApiRepository.loginWithPseudo('', '')
      expect(user.email).toBe('fcmsdlklkmdgjf')
    })

    it('when no user found then throw error', async () => {
      axiosInstance.post.mockImplementation(() => {
        throw new MockedError('', 404)
      })

      try {
        await userAuthApiRepository.loginWithPseudo('', '')
        fail()
      } catch (error) {
        expect(error instanceof ResourceNotFound).toBeTruthy()
      }
    })
  })
})

class MockedError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}
