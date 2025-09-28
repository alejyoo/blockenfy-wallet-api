export default {
  INTERNAL_ERROR: 'An internal error occurred.',
  USER: {
    EXIST: 'User does not exist',
    REQUIRED: 'User ID is required.',
    TOO_SHORT: 'User ID must have at least 3 characters.',
    TOO_LONG: 'User ID must not exceed 30 characters.',
    INVALID: 'User ID must contain only letters, numbers, _ or -.'
  },
  AMOUNT: {
    POSITIVE: 'Amount must be positive.',
    MAX: 'Amount exceeds maximum allowed.',
    NAN: 'Amount must be a valid number.',
    DECIMALS: 'Amount must have max 2 decimals.'
  },
  DISPLAY_NAME: {
    TOO_SHORT: 'Display name is too short.',
    TOO_LONG: 'Display name is too long.',
    INVALID: 'Display name must be alphanumeric with spaces only.'
  },
  CUSTOM_ID: {
    IS_EXIST: 'Custom id ID already taken',
    TOO_SHORT: 'Custom ID is too short.',
    TOO_LONG: 'Custom ID is too long.',
    INVALID: 'Custom ID contains invalid characters.'
  }
}
