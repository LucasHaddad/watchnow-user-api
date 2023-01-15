import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }
  
  getException() {
    throw new BadRequestException('Oh no');
  }
}
