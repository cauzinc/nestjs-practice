import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User } from 'src/dto/user.dto'
import { UserDocument } from 'src/schemas/user.schema';
import { makeSalt, encryptPassword } from 'src/utils/crypt'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create({ userName, password }): Promise<User> {
    const existData = await this.userModel.find({ userName })
    // console.log('data', existData)
    if (existData.length) {
      throw new Error('Username already exists.')
    }
    const salt = makeSalt()
    const encryptedPass = encryptPassword(password, salt)
    const newUser = new User({
      userName,
      password: encryptedPass,
      passSalt: salt
    })
    const userModel = new this.userModel(newUser)
    return await userModel.save()
  }
}
