import { Auth } from 'src/schemas/auth.schema'
import * as mongoose from 'mongoose'
const DEFAULT_MANAGE = 'system'

export class CreateAuthDTO extends Auth {
  constructor (params: { type: string, permission: string }) {
    super()
    const { type, permission } = params
    this._id = new mongoose.Types.ObjectId()
    this.type = type
    this.permission = permission
    this.createBy = DEFAULT_MANAGE
    this.createTime = new Date()
    this.updateBy = DEFAULT_MANAGE
    this.updateTime = new Date()
  }
}
