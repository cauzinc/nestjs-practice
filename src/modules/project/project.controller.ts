import { Controller, Get, Post, Req } from '@nestjs/common';
import { ProjectService } from './project.service';
import { AuthGuard } from '@nestjs/passport'
import { UseGuards } from '@nestjs/common/decorators';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';
import { RoleService } from '../role/role.service';
import { AUTH_TYPE } from '../auth/constants';
import { Response } from 'src/dto/response.dto'
@UseGuards(AuthGuard('jwt'))
@Controller('/project')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly roleService: RoleService,
  ) {}

  @Post('/create')
  async createProject (@Req() req) {
    const { userId } = req.user
    const { name } = req.body
    const userInfo = await this.userService.getUserInfo({ userId })
    const newProject = this.projectService.create({
      userName: userInfo.userName,
      name
    })
    return new Response.Success({
      data: newProject
    })
  }

  @Get('/list')
  async findProject (@Req() req) {
    const { userId } = req.user
    const project = await this.projectService.find()
    const userInfo = await this.userService.getUserInfo({ userId })
    const userRoles = await this.roleService.findByIds({ roleIds: userInfo.roles })
    let authIds = []
    userRoles.forEach(role => {
      authIds = authIds.concat(role.auths)
    })
    const userAuths = await this.authService.findByIds({ authIds })
    const projectAuths = userAuths.filter(item => item.type === AUTH_TYPE.PROJECT)
    
    return new Response.Success({
      data: project.filter(item => projectAuths.some(auth => {
        const projectPermission = auth.permission.split('::')[1]
        return projectPermission === item.name
      }))
    })
  }
}
