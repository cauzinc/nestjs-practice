import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { I18n, i18nSchema } from 'src/schemas/i18n.schema'
import { Site, siteSchema } from 'src/schemas/site.schema'
import { I18nController } from './i18n.controller'
import { I18nService } from './i18n.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: I18n.name, schema: i18nSchema }]),
    MongooseModule.forFeature([{ name: Site.name, schema: siteSchema }])
  ],
  controllers: [I18nController],
  providers: [I18nService],
})
export class I18nModule {}
