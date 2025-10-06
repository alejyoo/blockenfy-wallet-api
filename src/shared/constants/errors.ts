export default {
  INTERNAL_ERROR: 'An internal error occurred.',

  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password.',
    EMAIL_ALREADY_EXISTS: 'Email already registered.'
  },

  USER: {
    NOT_FOUND: 'User does not exist.',
    REQUIRED: 'User ID is required.',
    TOO_SHORT: 'User ID must have at least 3 characters.',
    TOO_LONG: 'User ID must not exceed 30 characters.',
    INVALID: 'User ID must contain only letters, numbers, _ or -.',
    NO_CHANGES: 'No changes detected.'
  },

  CUSTOM_ID: {
    ALREADY_EXISTS: 'Custom ID already taken.',
    TOO_SHORT: 'Custom ID is too short.',
    TOO_LONG: 'Custom ID is too long.',
    INVALID: 'Custom ID contains invalid characters.'
  },

  DISPLAY_NAME: {
    TOO_SHORT: 'Display name is too short.',
    TOO_LONG: 'Display name is too long.',
    INVALID: 'Display name must be alphanumeric with spaces only.'
  },

  AMOUNT: {
    POSITIVE: 'Amount must be positive.',
    MAX: 'Amount exceeds maximum allowed.',
    NAN: 'Amount must be a valid number.',
    DECIMALS: 'Amount must have max 2 decimals.'
  },

  PERMISSION: {
    AUTH_REQUIRED: 'Authentication required',
    PERMISSION_DENIED: 'You do not have permission to access this resource',
    OWNER_ONLY: 'You can only access your own resources'
  },

  SUCCESS: {
    USER_FETCHED: 'User fetched successfully',
    USER_LISTED: 'Users fetched successfully',
    USER_CREATED: 'User created successfully',
    USER_UPDATED: 'User updated successfully',
    USER_DELETED: 'User deleted successfully',
    TRANSACTION_SENT: 'Transaction completed successfully',
    TRANSACTION_RECHARGE: 'Account recharged successfully',
    AUTH_REGISTER: 'User registered successfully',
    AUTH_LOGIN: 'Login successful'
  },
  TRANSACTION: {
    SELF_SEND: 'Cannot send money to yourself',
    INSUFFICIENT_BALANCE: 'Insufficient balance'
  }
}
