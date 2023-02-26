import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWT_CONSTANTS } from './constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor () {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_CONSTANTS.secret
    })
  }

  // Step 4: JWT验证，被守卫调用
  async validate (payload: any) {
    console.log('Step 4: JWT验证,被守卫调用')
    return {
      userId: payload.sub,
      username: payload.username
      // realName: payload.realName,
      // role: payload.role
    }
  }
}
