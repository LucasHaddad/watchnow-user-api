import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto, createdBy: string) {
    return this.userRepository.save({ ...createUserDto, createdBy });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id }});
  }

  update(updateUserDto: UpdateUserDto, updatedBy: string) {
    return this.userRepository.save({ ...updateUserDto, updatedBy });
  }

  remove(id: string, deletedBy: string) {
    return this.userRepository.softDelete({ id, deletedBy });
  }
}
