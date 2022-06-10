import { BadRequestException, Injectable } from '@nestjs/common';
import { Coordinates } from '../file/interfaces/coordinates.interface';
import { Input } from '../file/interfaces/Input.interface';

@Injectable()
export class RoverService {
  finalPosition(input: Input): Array<Coordinates> {
    const { rovers } = input;
    const outputs = [];
    for (let i = 0; i < rovers.length; i++) {
      const output = {
        x: rovers[i].coordinate.x,
        y: rovers[i].coordinate.y,
        cardinal: rovers[i].coordinate.cardinal,
      };
      const cardinals = ['N', 'E', 'S', 'W'];
      const { moving } = rovers[i];
      for (let j = 0; j < moving.length; j++) {
        const { cardinal } = output;
        if (moving[j] === 'M') {
          switch (cardinal) {
            case 'N':
              output.y++;
              break;
            case 'S':
              output.y--;
              break;
            case 'E':
              output.x++;
              break;
            case 'W':
              output.x--;
              break;
            default:
              throw new BadRequestException('Invalid input');
          }
          if (output.x > 5 || output.y > 5) {
            throw new BadRequestException('Invalid input');
          }
        } else if (moving[j] === 'L') {
          output.cardinal =
            cardinals[(((cardinals.indexOf(cardinal) - 1) % 4) + 4) % 4];
        } else if (moving[j] === 'R') {
          output.cardinal =
            cardinals[(((cardinals.indexOf(cardinal) + 1) % 4) + 4) % 4];
        } else {
          throw new BadRequestException('Invalid movement');
        }
      }
      outputs.push(output);
    }

    return outputs;
  }
}
