import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { I18n } from './i18n.schema'
// import { Project } from './project.schema'

export type SiteDocument = Site & mongoose.Document

@Schema()
export class Site {
  @Prop()
  siteName: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Internation' })
  // i18nId: I18n;

  // @Prop({
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Internation' }]
  // })
  // textConfig: I18n;
}

export const siteSchema = SchemaFactory.createForClass(Site)
