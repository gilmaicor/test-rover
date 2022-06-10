import { Coordinates } from './coordinates.interface';

export interface Rover {
  coordinate: Coordinates;
  moving: Array<string>;
}
