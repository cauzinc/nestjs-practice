import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectModule } from './modules/project/project.module'
import { SiteModule } from './modules/site/site.module'
import { I18nModule } from './modules/Internation/i18n.module'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/config_center_database'),
    ProjectModule,
    SiteModule,
    I18nModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
