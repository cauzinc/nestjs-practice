import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { International } from './International.schema'

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
  i18nId: International;
}

export const ProjectSchema = SchemaFactory.createForClass(Project)
