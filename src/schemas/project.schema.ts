import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Site } from './site.schema'

export type ProjectDocument = Project & mongoose.Document

@Schema()
export class Project {
  @Prop()
  name: string;

  @Prop()
  admin: string;

  @Prop()
  adminId: number;

  @Prop({ type: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Internation'
  }] })
  siteIds: Site;
}

export const ProjectSchema = SchemaFactory.createForClass(Project)
