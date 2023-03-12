import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
// import { Project } from './project.schema'

export type UserDocument = User & mongoose.Document

@Schema()
export class User {
  @Prop()
  _id: mongoose.Schema.Types.ObjectId
  
  @Prop()
  userName: string;

  @Prop()
  password: string;

  @Prop()
  passSalt: string;

  @Prop()
  createBy: string;

  @Prop()
  createTime: Date;

  @Prop()
  updateBy: string;

  @Prop()
  updateTime: Date;

  @Prop()
  roles: mongoose.Schema.Types.ObjectId[]
}

export const userSchema = SchemaFactory.createForClass(User)
