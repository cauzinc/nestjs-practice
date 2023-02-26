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

  async create(): Promise<User> {
    const newUser = new User({
      userName: 'admin',
      password: '123'
    })
    const userModel = new this.userModel(newUser)
    return await userModel.save()
  }
}
