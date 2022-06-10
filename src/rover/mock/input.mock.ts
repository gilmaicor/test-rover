import { Input } from '../../file/interfaces/Input.interface';

const input: Input = {
  upperRight: { x: 5, y: 5 },
  rovers: [
    {
      coordinate: { x: 1, y: 2, cardinal: 'N' },
      moving: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
    },
  ],
};

export default input;
