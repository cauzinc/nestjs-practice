import { Role } from 'src/schemas/role.schema'
import * as mongoose from 'mongoose'
const DEFAULT_MANAGE = 'system'

export class CreateRoleDTO extends Role {
  constructor (params: {
    roleName: string,
    auths: mongoose.Types.ObjectId[],
    roleLevel: number
  }) {
    super()
    const { roleName, auths, roleLevel } = params
    this.roleName = roleName
    this.roleLevel = roleLevel
    this.auths = auths
    this.createBy = DEFAULT_MANAGE
    this.createTime = new Date()
    this.updateBy = DEFAULT_MANAGE
    this.updateTime = new Date()
  }
}
