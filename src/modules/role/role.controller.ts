import { Controller, Post, Get, Req } from '@nestjs/common';
import { RoleService } from './role.service';
import { AuthService } from '../auth/auth.service';
import { Response } from 'src/dto/response.dto'
import { AuthGuard } from '@nestjs/passport'
import { UseGuards } from '@nestjs/common/decorators';

@Controller('/role')
export class RoleController {
  constructor(
    private readonly roleService: RoleService
  ) {}
  @Post('/create')
  createProject (@Req() req) {
    const { roleName, auths, roleLevel } = req.body
    return this.roleService.create({
      roleName, auths, roleLevel
    })
  }

  // @Get('/list')
  // findProject () {
  //   return this.roleService.findByIds()
  // }
}
