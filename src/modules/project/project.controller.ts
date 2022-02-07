import { Controller, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/create')
  createProject () {
    return this.projectService.create()
  }
}
