import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { UserService } from '../user/user.service';
import { MongooseModule } from '@nestjs/mongoose'
import { User, userSchema } from 'src/schemas/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  providers: [RoleService, UserService],
  exports: [RoleService],
})
export class AuthModule {}
