import { User as _User } from 'src/schemas/user.schema'
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
  }
}