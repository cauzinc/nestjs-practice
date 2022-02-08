import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { I18n, I18nDocument } from 'src/schemas/i18n.schema'
import { Site, SiteDocument } from 'src/schemas/site.schema'

@Injectable()
export class I18nService {
  constructor(
    @InjectModel(I18n.name) private i18nModel: Model<I18nDocument>,
    @InjectModel(Site.name) private siteModel: Model<SiteDocument>
  ) {}

  async create({ siteId, value, key }): Promise<I18n> {
    const newItem = {
      textKey: key,
      textValue: value,
      status: 0,
      siteId
    }
    const model = new this.i18nModel(newItem)
    return model.save()
  }

  async find({ siteId }): Promise<I18n[]> {
    const doc = this.i18nModel.find({ siteId: siteId, status: 0 })
    return doc
  }

  async edit({ i18nId, value }): Promise<I18n> {
    return this.i18nModel.findByIdAndUpdate(
      i18nId,
      { textValue: value }
    )
  }

  async delete({ i18nId }): Promise<I18n> {
    return this.i18nModel.findByIdAndUpdate(
      i18nId,
      { status: 1 }
    )
  }
}
