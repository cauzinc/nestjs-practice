import { User as _User } from 'src/schemas/user.schema'
import * as mongoose from 'mongoose'
const DEFAULT_MANAGE = 'system'

interface UserParams {
  userName: string
  password: string
  passSalt: string
}

export class User extends _User {
  constructor (params: UserParams) {
    super()
    const { userName, password, passSalt } = params
    this.userName = userName
    this.password = password
    this.passSalt = passSalt
    this.createBy = DEFAULT_MANAGE
    this.createTime = new Date()
    this.updateBy = DEFAULT_MANAGE
    this.updateTime = new Date()
    this.roles = []
  }
}

export class UserInfoDTO {
  readonly userName: string
  readonly createBy: string
  readonly createTime: Date
  readonly updateBy: string
  readonly updateTime: Date
  readonly roles: mongoose.Types.ObjectId[]
  constructor (user: User) {
    const { userName, createBy, createTime, updateBy, updateTime, roles } = user
    this.userName = userName
    this.createTime = createTime
    this.createBy = createBy
    this.updateBy = updateBy
    this.updateTime = updateTime
    this.roles = roles
  }
} 