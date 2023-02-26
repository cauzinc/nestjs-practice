import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Project } from './project.schema'

export type SiteDocument = Site & mongoose.Document

@Schema()
export class Site {
  @Prop()
  siteName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Project' })
  projectId: Project;

  // @Prop({
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Internation' }]
  // })
  // textConfig: I18n;
}

export const siteSchema = SchemaFactory.createForClass(Site)
