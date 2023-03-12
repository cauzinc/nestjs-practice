import { Controller, Post, Req } from '@nestjs/common';
import { RoleService } from './role.service';
import { AuthService } from '../auth/auth.service';
import { Response } from 'src/dto/response.dto'
import { AuthGuard } from '@nestjs/passport'
import { UseGuards } from '@nestjs/common/decorators';

@Controller('/user')
export class UserController {
  constructor(
    private readonly roleService: RoleService
  ) {}

}
