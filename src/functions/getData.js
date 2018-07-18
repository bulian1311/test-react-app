import keys from '../config/keys';
import fakeData from './fakeData';

export default async value => {
  switch (value) {
    case 'litleData':
      const response1 = await fetch(keys.litleData);
      const litleData = await response1.json();
      return litleData;
    case 'bigData':
      const response2 = await fetch(keys.bigData);
      const bigData = await response2.json();
      return bigData;
    default:
      return fakeData();
  }
};
