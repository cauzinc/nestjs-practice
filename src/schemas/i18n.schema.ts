import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Site } from './site.schema'

export type I18nDocument = I18n & mongoose.Document

@Schema()
export class I18n {
  @Prop()
  status: number  // 0 新建 1 删除

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Site' })
  siteId: Site

  @Prop()
  textKey: string

  @Prop()
  textValue: string
}

export const i18nSchema = SchemaFactory.createForClass(I18n)
