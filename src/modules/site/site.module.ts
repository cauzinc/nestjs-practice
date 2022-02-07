import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Project, ProjectSchema } from '../../schemas/project.schema'
import { I18n, i18nSchema } from '../../schemas/i18n.schema'
import { ProjectController } from './site.controller'
import { ProjectService } from './site.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    MongooseModule.forFeature([{ name: I18n.name, schema: i18nSchema }])
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
