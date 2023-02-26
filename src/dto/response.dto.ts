export class BaseResponse {
  msg: string
  code: number
  data: any
}

export const STATUS_CODE = {
  success: 200,
  exception: 500
}

class Error extends BaseResponse {
  constructor ({ msg, code = STATUS_CODE.exception }) {
    super()
    this.code = code
    this.msg = msg
    this.data = null
  }
}

class Success extends BaseResponse {
  constructor ({ data }) {
    super()
    this.code = STATUS_CODE.success
    this.msg = 'success'
    this.data = data
  }
}

export class Response {
  static Error
  static Success
}

Response.Success = Success
Response.Error = Error
