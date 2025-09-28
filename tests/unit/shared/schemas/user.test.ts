import { describe, expect, it } from 'vitest'
import {
  createUserSchema,
  getUserSchema
} from '../../../../src/shared/schemas/'

describe('User Schemas', () => {
  describe('createUserSchema', () => {
    it('should throw if displayName or customId are invalid', () => {
      expect(() =>
        createUserSchema.parse({ displayName: 'ab', customId: 'valid123' })
      ).toThrow()
      expect(() =>
        createUserSchema.parse({ displayName: 'ValidName', customId: 'ab' })
      ).toThrow()
      expect(() =>
        createUserSchema.parse({ displayName: '', customId: '' })
      ).toThrow()
    })
  })

  describe('getUserSchema', () => {
    it('should throw if id is invalid', () => {
      expect(() => getUserSchema.parse({ id: '' })).toThrow()
      expect(() => getUserSchema.parse({ id: 'ab' })).toThrow()
      expect(() => getUserSchema.parse({ id: 'a'.repeat(31) })).toThrow()
    })
  })
})
