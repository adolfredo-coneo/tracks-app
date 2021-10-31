import { LocationObject } from "expo-location";

interface Locations {
  locations: LocationObject[];
  currentLocation: LocationObject | null;
  recording: boolean;
  name: string;
};

export default Locations;
