import { Module, forwardRef } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Project, ProjectSchema } from 'src/schemas/project.schema'
import { I18n, i18nSchema } from 'src/schemas/i18n.schema'
import { Site, siteSchema } from 'src/schemas/site.schema'
import { ProjectController } from './project.controller'
import { ProjectService } from './project.service'
import { AuthModule } from '../auth/auth.module'
import { RoleModule } from '../role/role.module'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    MongooseModule.forFeature([{ name: I18n.name, schema: i18nSchema }]),
    MongooseModule.forFeature([{ name: Site.name, schema: siteSchema }]),
    forwardRef(() => AuthModule),
    forwardRef(() => RoleModule),
    forwardRef(() => UserModule),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
