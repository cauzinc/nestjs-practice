import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class TstMiddleware implements NestMiddleware {
  use (req: Request, res: Response, next) {
    console.log('ON_TstMiddleware')
    next()
  }
}