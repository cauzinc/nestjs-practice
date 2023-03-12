import { Module, forwardRef } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, userSchema } from 'src/schemas/user.schema'
// import { Role, RoleSchema } from 'src/schemas/role.schema'
import { Auth, authSchema } from 'src/schemas/auth.schema'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { AuthModule } from '../auth/auth.module'
import { RoleModule } from '../role/role.module'

@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => RoleModule),
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    MongooseModule.forFeature([{ name: Auth.name, schema: authSchema }])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
