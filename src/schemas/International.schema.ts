import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type InternationalDocument = International & Document

type textItem = {
  key: string
  value: string
}

@Schema()
export class International {
  @Prop()
  textConfig: textItem[]
}

export const InternationalSchema = SchemaFactory.createForClass(International)
