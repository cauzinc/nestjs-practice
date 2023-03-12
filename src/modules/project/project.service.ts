import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Project, ProjectDocument } from 'src/schemas/project.schema'
import { I18n, I18nDocument } from 'src/schemas/i18n.schema';
import { Site, SiteDocument } from 'src/schemas/site.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
    @InjectModel(I18n.name) private i18nModel: Model<I18nDocument>,
    @InjectModel(Site.name) private siteModel: Model<SiteDocument>,
  ) {}

  async create(): Promise<Project> {
    // 创建一个i18n配置
    const newI8n = {
      textConfig: []
    }
    const createdI18n = new this.i18nModel(newI8n)
    await createdI18n.save()
    // 创建以一个站点
    const newSite = {
      siteName: 'en',
      i18nId: createdI18n._id
    }
    const createdSite = new this.siteModel(newSite)
    await createdSite.save()
    // 创建一个项目
    const newProject = {
      name: 'eLearning',
      admin: 'admin',
      siteIds: [createdSite._id]
    }
    const createdProject = new this.projectModel(newProject)
    return createdProject.save()
  }

async find({ userId }): Promise<Project[]> {
    const docs = this.projectModel.find()
    return docs
  }
}
