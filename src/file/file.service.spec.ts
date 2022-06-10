import { Test, TestingModule } from '@nestjs/testing';
import { join } from 'path';
import { FileService } from './file.service';
import { Input } from './interfaces/Input.interface';

describe('FileService', () => {
  let service: FileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileService],
    }).compile();

    service = module.get<FileService>(FileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return input', async () => {
    const input: Input = {
      upperRight: { x: 5, y: 5 },
      rovers: [
        {
          coordinate: { x: 1, y: 2, cardinal: 'N' },
          moving: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
        },
      ],
    };
    expect(JSON.stringify(input)).toEqual(
      JSON.stringify(
        await service.readFile(
          join(__dirname, '..', 'file', 'mock', 'file.mock.txt'),
        ),
      ),
    );
  });
});
