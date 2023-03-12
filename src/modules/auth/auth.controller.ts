import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport'
import { UseGuards } from '@nestjs/common/decorators';
import { Response } from 'src/dto/response.dto'
@UseGuards(AuthGuard('jwt'))
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/create')
  async createAuth (@Req() req) {
    const { type, permission } = req.body
    const auth = await this.authService.create({
      type, permission
    })
    return new Response.Success({
      data: auth
    })
  }
}
