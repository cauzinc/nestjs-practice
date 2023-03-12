import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
// import { map } from 'rxjs/operators'

@Injectable()
export class RBACInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log('ON_RBACInterceptor')
    return next.handle()
  }
}