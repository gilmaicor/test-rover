import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { RoverModule } from '../rover/rover.module';

@Module({
  imports: [RoverModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
