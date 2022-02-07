import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Project, ProjectDocument } from '../../schemas/project.schema'

@Injectable()
export class ProjectService {
  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

  async create(): Promise<Project> {
    const newProject = {
      name: 'eLearning',
      admin: 'admin'
    }
    const createdProject = new this.projectModel(newProject)
    return createdProject.save()
  }
}
