import { LocationObject } from 'expo-location';

interface Track {
  name: string;
  locations: LocationObject[];
  userId: string;
  _id: string;
}

export default Track;
