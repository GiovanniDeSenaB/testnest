import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { UserFilter } from './filter/user-filter';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<CreateUserDto[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<CreateUserDto> {
    return this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: CreateUserDto): Promise<CreateUserDto[]> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    return this.userModel.findByIdAndDelete(id);
  }

  async findByFilter(filter: UserFilter): Promise<CreateUserDto[]> {
    let query = {};

    if (filter.name)
        query['name'] = filter.name;

    if (filter.surname)
      query['surname'] = filter.surname;

    return this.userModel.find(query);
  }
}
