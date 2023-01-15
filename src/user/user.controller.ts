import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@/core/decorators/user.decorator';
import { TokenData } from '@/core/guard/token.types';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @User() tokenData: TokenData) {
    return this.userService.create(createUserDto, tokenData.userId);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @User() tokenData: TokenData) {
    return this.userService.update(updateUserDto, tokenData.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() tokenData: TokenData) {
    return this.userService.remove(id, tokenData.userId);
  }
}
