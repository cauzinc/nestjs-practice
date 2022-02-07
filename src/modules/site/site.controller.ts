import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './site.service';

@Controller('/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/create')
  createProject () {
    return this.projectService.create()
  }

  @Get('/list')
  findProject () {
    return this.projectService.find()
  }
}
