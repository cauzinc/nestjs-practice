import { Module, forwardRef } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
// import { Project, ProjectSchema } from 'src/schemas/project.schema'
// import { I18n, i18nSchema } from 'src/schemas/i18n.schema'
// import { Site, siteSchema } from 'src/schemas/site.schema'
import { User, userSchema } from 'src/schemas/user.schema'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    forwardRef(() => AuthModule)
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
