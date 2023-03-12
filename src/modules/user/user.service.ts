import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserInfoDTO } from 'src/dto/user.dto'
import { UserDocument } from 'src/schemas/user.schema';
import { makeSalt, encryptPassword } from 'src/utils/crypt'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create({ userName, password }): Promise<User> {
    const existData = await this.userModel.find({ userName })
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

  async findOne({ userName }): Promise<User> {
    return await this.userModel.findOne({ userName })
  }

  async getUserInfo({ userId }): Promise<UserInfoDTO> {
    const user = await this.userModel.findOne({ _id: userId })
    return new UserInfoDTO(user)
  }
}
