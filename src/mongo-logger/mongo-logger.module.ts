import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoLoggerService } from './mongo-logger.service';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI)],
  providers: [MongoLoggerService],
  exports: [MongoLoggerService],
})
export class MongoLoggerModule {}