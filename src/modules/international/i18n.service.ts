import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { I18n, I18nDocument } from '../../schemas/i18n.schema'

@Injectable()
export class I18nService {
  constructor(@InjectModel(I18n.name) private i18nModel: Model<I18nDocument>) {}

  async create(): Promise<I18n> {
    const newItem = {
      key: 'common.pass',
      value: 'Pass'
    }
    const model = new this.i18nModel(newItem)
    return model.save()
  }

  async find(): Promise<I18n[]> {
    const docs = this.i18nModel.find()
    return docs
  }
}
