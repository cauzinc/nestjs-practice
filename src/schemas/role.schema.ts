import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Auth } from './auth.schema'

export type RoleDocument = Role & mongoose.Document

@Schema()
export class Role {
  @Prop()
  roleName: string

  @Prop()
  createBy: string

  @Prop()
  updateBy: string

  @Prop()
  createTime: Date

  @Prop()
  updateTime: Date

  @Prop({ type: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Auth'
  }] })
  auths: Auth
}

export const RoleSchema = SchemaFactory.createForClass(Role)
