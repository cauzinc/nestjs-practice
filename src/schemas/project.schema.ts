import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { I18n } from './i18n.schema'

export type ProjectDocument = Project & mongoose.Document

@Schema()
export class Project {
  @Prop()
  name: string;

  @Prop()
  admin: string;

  @Prop()
  adminId: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'International' })
  i18nId: I18n;
}

export const ProjectSchema = SchemaFactory.createForClass(Project)
