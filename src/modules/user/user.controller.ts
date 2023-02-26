import { Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'src/dto/response.dto'

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
