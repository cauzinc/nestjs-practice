import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
// import { Project } from './project.schema'

export type AuthDocument = Auth & mongoose.Document

@Schema()
export class Auth {
  @Prop()
  _id: mongoose.Schema.Types.ObjectId
  
  @Prop()
  type: string;

  @Prop()
  permission: string;

  @Prop()
  createBy: string;

  @Prop()
  createTime: Date;

  @Prop()
  updateBy: string;

  @Prop()
  updateTime: Date;
}

export const authSchema = SchemaFactory.createForClass(Auth)
