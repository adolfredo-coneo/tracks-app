import { LocationObject } from "expo-location";

interface Locations {
  locations: LocationObject[];
  currentLocation: LocationObject | null;
  recording: boolean;
};

export default Locations;
