import { Injectable } from '@nestjs/common';
// import { UserService } from '../user/user.service';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Role, RoleDocument } from 'src/schemas/role.schema';
import { CreateRoleDTO } from 'src/dto/role.dto'
@Injectable()
export class RoleService {
  constructor (
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
  ) {}
  
  async create({ roleName, auths, roleLevel }) {
    const createRoleDTO = new CreateRoleDTO({
      roleName,
      auths,
      roleLevel
    })
    const newRole = new this.roleModel(createRoleDTO)
    return newRole.save()
  }

  async findByIds({ roleIds }) {
    return await this.roleModel.find({
      _id: { $in: roleIds }
    })
  }
  
}
