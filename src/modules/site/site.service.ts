import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Project, ProjectDocument } from 'src/schemas/project.schema'
import { I18n, I18nDocument } from 'src/schemas/i18n.schema';
import { Site, SiteDocument } from 'src/schemas/site.schema';

@Injectable()
export class SiteService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
    @InjectModel(I18n.name) private i18nModel: Model<I18nDocument>,
    @InjectModel(Site.name) private siteModel: Model<SiteDocument>,
  ) {}

  async create(data): Promise<Site> {
    const { projectId, siteName } = data
    
    // 创建以一个站点
    const newSite = {
      siteName
    }
    const createdSite = new this.siteModel(newSite)

    await this.projectModel.findOneAndUpdate(
      { _id: projectId },
      { $addToSet: { siteIds: createdSite._id } }
    )
    return createdSite.save()
  }

  async find({ projectId }): Promise<Site[]> {
    const project = await this.projectModel.findById(projectId)
    const docs = this.siteModel.find({ $in: project.siteIds })
    return docs
  }
}
