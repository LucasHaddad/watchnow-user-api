import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Public } from '@/core/decorators/public.decorator';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('HealthCheck')
  @Public()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ExceptionBody')
  @Public()
  getException() {
    this.appService.getException();
  }
}
