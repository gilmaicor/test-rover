import { Test, TestingModule } from '@nestjs/testing';
import { Coordinates } from '../file/interfaces/coordinates.interface';
import { Input } from '../file/interfaces/Input.interface';
import { RoverService } from './rover.service';

describe('RoverService', () => {
  let service: RoverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoverService],
    }).compile();

    service = module.get<RoverService>(RoverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should return rover's final position", () => {
    const input: Input = {
      upperRight: { x: 5, y: 5 },
      rovers: [
        {
          coordinate: { x: 1, y: 2, cardinal: 'N' },
          moving: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
        },
      ],
    };

    const output: Array<Coordinates> = [
      {
        x: 1,
        y: 3,
        cardinal: 'N',
      },
    ];

    expect(JSON.stringify(output)).toEqual(
      JSON.stringify(service.finalPosition(input)),
    );
  });
});
