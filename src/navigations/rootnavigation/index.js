import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Message from "../../components/Message";
import Summary from "../../screens/Summary";
import AvailableTrip from "../../screens/AvailableTrips";
import Trip from "../../screens/Trip";
import Home from "../../screens/Home";
import Tabs from "../../screens/Tabs";
import TripLocation from "../../screens/TripLocation";

const Stack = createNativeStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" component={Tabs} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="message" component={Message} />
      <Stack.Screen name="summary" component={Summary} />
      <Stack.Screen name="avatrip" component={AvailableTrip} />
      <Stack.Screen name="trip" component={Trip} />
      <Stack.Screen name="triplocation" component={TripLocation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
