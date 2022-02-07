import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type I18nDocument = I18n & Document

export type textItem = {
  key: string
  value: string
}

@Schema()
export class I18n {
  @Prop()
  textConfig: textItem[]
}

export const i18nSchema = SchemaFactory.createForClass(I18n)
