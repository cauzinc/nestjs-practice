import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Project, ProjectDocument } from 'src/schemas/project.schema'
import { I18n, I18nDocument } from 'src/schemas/i18n.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
    @InjectModel(I18n.name) private i18nModel: Model<I18nDocument>
  ) {}

  async create(): Promise<Project> {
    const newI8n = {
      textConfig: []
    }
    const createdI18n = new this.i18nModel(newI8n)
    const newProject = {
      name: 'eLearning',
      admin: 'admin',
      i18nId: createdI18n._id      
    }
    const createdProject = new this.projectModel(newProject)
    await createdI18n.save()
    return createdProject.save()
  }

  async find(): Promise<Project[]> {
    const docs = this.projectModel.find()
    return docs
  }
}
