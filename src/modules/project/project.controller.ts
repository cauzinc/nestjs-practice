import { Controller, Get, Post, Req } from '@nestjs/common';
import { ProjectService } from './project.service';
import { AuthGuard } from '@nestjs/passport'
import { UseGuards } from '@nestjs/common/decorators';
@UseGuards(AuthGuard('jwt'))
@Controller('/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/create')
  createProject () {
    return this.projectService.create()
  }

  @Get('/list')
  findProject (@Req() req) {
    const { userId } = req.user
    return this.projectService.find({ userId })
  }
}
