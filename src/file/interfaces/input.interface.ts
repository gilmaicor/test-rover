import { Coordinates } from './coordinates.interface';
import { Rover } from './Rover.interface';

export interface Input {
  upperRight: Coordinates;
  rovers: Array<Rover>;
}
