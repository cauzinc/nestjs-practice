import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
// import { Project } from './project.schema'

export type UserDocument = User & mongoose.Document

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop()
  password: string;

  @Prop()
  createBy: string;

  @Prop()
  createTime: Date;

  @Prop()
  updateBy: string;

  @Prop()
  updateTime: Date;
}

export const userSchema = SchemaFactory.createForClass(User)
