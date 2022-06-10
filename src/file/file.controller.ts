import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { unlink } from 'fs';
import { RoverService } from '../rover/rover.service';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(
    private fileService: FileService,
    private roverService: RoverService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
  async uploadSingle(@UploadedFile() file, @Res() res: Response) {
    if (!file.path) throw new BadRequestException('File not found');
    const input = await this.fileService.readFile(file.path);
    unlink(file.path, (err) => {
      if (err) throw err;
    });
    console.log(JSON.stringify(this.roverService.finalPosition(input)));
    res.status(HttpStatus.OK).json(this.roverService.finalPosition(input));
  }
}
