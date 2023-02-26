import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User } from 'src/dto/user.dto'
import { UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create({ userName, password }): Promise<User> {
    const existData = this.userModel.find({ userName })
    if (existData) {
      throw new Error('Username already exists.')
    }
    const newUser = new User({
      userName,
      password
    })
    const userModel = new this.userModel(newUser)
    return await userModel.save()
  }
}
