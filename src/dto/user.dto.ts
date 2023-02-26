const DEFAULT_MANAGE = 'system'

export class User {
  constructor (params) {
    const { userName, password } = params
    return {
      userName,
      password,
      createBy: DEFAULT_MANAGE,
      createTime: new Date(),
      updateBy: DEFAULT_MANAGE,
      updateTime: new Date()
    }
  }
}