import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { I18n, i18nSchema } from '../../schemas/i18n.schema'
import { I18nController } from './i18n.controller'
import { I18nService } from './i18n.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: I18n.name, schema: i18nSchema }])
  ],
  controllers: [I18nController],
  providers: [I18nService],
})
export class I18nModule {}
