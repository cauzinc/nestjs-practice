import { Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { RoleService } from '../role/role.service';
import { Response } from 'src/dto/response.dto'
import { AuthGuard } from '@nestjs/passport'
import { UseGuards } from '@nestjs/common/decorators';

@Controller('/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly roleService: RoleService,
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

  @UseGuards(AuthGuard('jwt'))
  @Post('/getUserInfo')
  async getUserInfo (@Req() req) {
    const userId = req.user ? req.user.userId : ''
    // 返回签发token时包装的数据
    const userInfo = await this.userService.getUserInfo({ userId })
    const userRoles = await this.roleService.findByIds({ roleIds: userInfo.roles })
    let authIds = []
    userRoles.forEach(role => {
      authIds = authIds.concat(role.auths)
    })
    const userAuths = await this.authService.findByIds({ authIds })
    return new Response.Success({
      data: {
        ...userInfo,
        roles: userRoles,
        auths: userAuths
      }
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/roles/update')
  async update (@Req() req) {
    const userId = req.user ? req.user.userId : ''
    const { roles } = req.body
    const userInfo = await this.userService.updateAuth({ roles, userId })
    return new Response.Success({
      data: userInfo
    })
  }
}
