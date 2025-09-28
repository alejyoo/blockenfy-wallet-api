import { describe, expect, it } from 'vitest'
import {
  amountSchemas,
  customIdSchemas,
  displayNameSchemas,
  userIdSchemas
} from '../../../../src/shared/schemas'

describe('Zod Schemas', () => {
  describe('userIdSchemas', () => {
    it('should throw on empty, too short, or too long userId', () => {
      expect(() => userIdSchemas.parse('')).toThrow()
      expect(() => userIdSchemas.parse('ab')).toThrow()
      expect(() => userIdSchemas.parse('a'.repeat(31))).toThrow()
    })
  })

  describe('amountSchemas', () => {
    it('should throw on negative, zero, or NaN amount', () => {
      expect(() => amountSchemas.parse(-5)).toThrow()
      expect(() => amountSchemas.parse(0)).toThrow()
      expect(() => amountSchemas.parse(Number.NaN)).toThrow()
    })
  })

  describe('displayNameSchemas', () => {
    it('should throw on too short or too long displayName', () => {
      expect(() => displayNameSchemas.parse('ab')).toThrow()
      expect(() => displayNameSchemas.parse('a'.repeat(31))).toThrow()
    })
  })

  describe('customIdSchemas', () => {
    it('should throw on too short, too long or invalid chars', () => {
      expect(() => customIdSchemas.parse('ab')).toThrow()
      expect(() => customIdSchemas.parse('a'.repeat(31))).toThrow()
      expect(() => customIdSchemas.parse('invalid@@')).toThrow()
    })
  })
})
