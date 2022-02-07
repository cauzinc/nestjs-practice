import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectModule } from './modules/project/project.module'
import { SiteModule } from './modules/site/site.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/config_center_database'),
    ProjectModule,
    SiteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
