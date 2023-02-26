import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from 'src/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from 'src/utils/crypt';

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  // Step 2:  JWT, 校验用户信息
  async validateUser ({ userName, password }) {
    console.log('Step 2:  校验用户信息')
    const user = await this.userService.findOne({ userName })
    if (user) {
      const hashedPass = user.password
      const salt = user.passSalt
      const encryptedPass = encryptPassword(password, salt)
      if (hashedPass === encryptedPass) {
        return user
      } else {
        throw new Error('Password not correct')
      }
    }
    throw new Error('User not found.')
  }

   // Step 3: JWT, 生成签名
  async certificate(user: User) {
    console.log('Step 3: JWT, 生成签名')
    const payload = {
      username: user.userName,
      sub: user._id
    }
    try {
      const token = this.jwtService.sign(payload)
      return {
        token
      }
    } catch(err) {
      throw new Error(err.message)
    }
  }
}
