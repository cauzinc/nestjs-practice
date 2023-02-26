import * as crypto from 'crypto'

const SALT_CRYPTO_ALTH = 'base64'

export function makeSalt () {
  return crypto.randomBytes(3).toString(SALT_CRYPTO_ALTH)
}

export function encryptPassword (password: string, salt: string) {
  if (!password || !salt) return ''
  const tempSalt = Buffer.from(salt, SALT_CRYPTO_ALTH)
  return crypto.pbkdf2Sync(
    password,
    tempSalt,
    10000,
    16,
    'sha1'
  ).toString(SALT_CRYPTO_ALTH)
}