import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './file/file.module';
import { RoverModule } from './rover/rover.module';

@Module({
  imports: [FileModule, RoverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
