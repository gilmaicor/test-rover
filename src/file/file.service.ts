import { Injectable } from '@nestjs/common';
import { readFile } from 'fs';
import { Input } from './interfaces/Input.interface';
import { Rover } from './interfaces/Rover.interface';
import { Coordinates } from './interfaces/coordinates.interface';

@Injectable()
export class FileService {
  readFile(path: string): Promise<Input> {
    return new Promise((resolve, reject) => {
      readFile(path, 'utf8', (err, data) => {
        if (err) return reject(err);
        const lines = data.split(/\r?\n/);
        if (lines.length % 2 === 0) return reject('Invalid Input');
        try {
          const input = {
            upperRight: this.coordinates(lines[0]),
            rovers: this.rovers(lines),
          };
          resolve(input);
        } catch (error) {
          return reject(error);
        }
      });
    });
  }

  coordinates(line: string): Coordinates {
    return {
      x: parseInt(line.split(' ')[0], 10),
      y: parseInt(line.split(' ')[1], 10),
      cardinal: line.split(' ')[2],
    };
  }

  rovers(lines: Array<string>): Array<Rover> {
    const rovers = [];
    for (let i = 1; i < lines.length; i += 2) {
      const rover = {
        coordinate: this.coordinates(lines[i]),
        moving: [...lines[i + 1]],
      };
      rovers.push(rover);
    }

    return rovers;
  }
}
