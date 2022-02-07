import { Controller, Get, Post } from '@nestjs/common';
import { I18nService } from './i18n.service';

@Controller('/project')
export class I18nController {
  constructor(private readonly projectService: I18nService) {}

  @Post('/create')
  createProject () {
    return this.projectService.create()
  }

  @Get('/list')
  findProject () {
    return this.projectService.find()
  }
}
