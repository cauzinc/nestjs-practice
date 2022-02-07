import { Controller, Get, Post, Req } from '@nestjs/common';
import { SiteService } from './site.service';

@Controller('/site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post('/create')
  createSite (@Req() req) {
    const { projectId, siteName } = req.body
    return this.siteService.create({ projectId, siteName })
  }

  @Get('/list')
  findSite (@Req() req) {
    const { projectId } = req.body
    return this.siteService.find({ projectId })
  }
}
