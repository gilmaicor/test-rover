import { Module } from '@nestjs/common';
import { RoverService } from './rover.service';

@Module({
  providers: [RoverService],
  exports: [RoverService],
})
export class RoverModule {}
