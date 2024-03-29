import { Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { Response } from 'src/dto/response.dto'

@Controller('/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  // Step 1: JWT 用户请求登录
  @Post('/login')
  async login(@Req() req) {
    const { userName, password } = req.body
    try {
      const user = await this.authService.validateUser({ userName, password })
      const data = await this.authService.certificate(user)
      return new Response.Success({
        data: {
          token: data.token
        }
      })
    } catch(err) {
      return new Response.Error({
        msg: err.message
      })
    }
  }

  @Post('/create')
  async createProject (@Req() req) {
    const { userName = 'admin', password = '123' } = req.body
    try {
      const data = await this.userService.create({
        userName,
        password
      })
      return new Response.Success({
        data
      })
    } catch(err) {
      return new Response.Error({
        msg: err.message
      })
    }
  }
}
