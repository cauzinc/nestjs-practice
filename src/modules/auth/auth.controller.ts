import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport'
import { UseGuards } from '@nestjs/common/decorators';
@UseGuards(AuthGuard('jwt'))
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/create')
  createProject () {
    return this.authService.create()
  }

  @Get('/list')
  findProject () {
    return this.authService.find()
  }
}
