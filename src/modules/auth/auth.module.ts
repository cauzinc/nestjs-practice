import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
// import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
// import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from './constants';
import { MongooseModule } from '@nestjs/mongoose'
import { User, userSchema } from 'src/schemas/user.schema'

@Module({
  imports: [
    // forwardRef(() => UserModule),
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: '8h' }, // token 过期时效
    }),
  ],
  providers: [AuthService, JwtStrategy, UserService],
  exports: [AuthService],
})
export class AuthModule {}
