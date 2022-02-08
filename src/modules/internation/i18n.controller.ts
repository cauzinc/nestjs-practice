import { Controller, Get, Post, Req } from '@nestjs/common';
import { I18nService } from './i18n.service';

@Controller('/i18n')
export class I18nController {
  constructor(private readonly i18nService: I18nService) {}

  @Post('/add')
  createI18n (@Req() req) {
    const { siteId, value, key } = req.body
    return this.i18nService.create({ siteId, value, key })
  }

  @Post('/edit')
  edit (@Req() req) {
    const { i18nId, value } = req.body
    return this.i18nService.edit({ i18nId, value })
  }

  @Post('/delete')
  delete (@Req() req) {
    const { i18nId } = req.body
    return this.i18nService.delete({ i18nId })
  }

  @Get('/getConfig')
  findI18nConfig (@Req() req) {
    const { siteId } = req.query
    return this.i18nService.find({ siteId })
  }
}
