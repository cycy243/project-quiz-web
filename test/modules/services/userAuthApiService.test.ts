import { beforeEach, describe, expect, it, Mock, vi } from 'vitest'
import UserRegisterRepository from '../../../src/modules/repository/iUserAuthRepository'
import AuthService from '../../../src/modules/services/authService'
import AuthApiService from '../../../src/modules/services/api/authApiService'
import { fail } from 'assert'
import ServiceError from '../../../src/modules/services/error/serviceError'

vi.mock('redaxios')

describe('UserAuthApiService', () => {
  describe('connect user', () => {
    let axiosInstance: any
    let mockedAuthApiRepo: UserRegisterRepository
    let authApiService: AuthService

    beforeEach(() => {
      axiosInstance = { post: vi.fn() }
      mockedAuthApiRepo = {
        loginWithPseudo: vi.fn(),
        register: vi.fn()
      }

      authApiService = new AuthApiService(mockedAuthApiRepo)
    })

    describe('user connect', () => {
      it('if user not found then throw service errer', async (async) => {
        mockedAuthApiRepo.loginWithPseudo.mockRejectedValue(new ServiceError(''))

        try {
          await authApiService.loginWithLogin('', '')
          fail()
        } catch (error) {
          expect(error instanceof ServiceError).toBeTruthy()
        }
      })
    })
  })
})
