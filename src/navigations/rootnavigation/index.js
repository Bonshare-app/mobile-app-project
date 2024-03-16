import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Message from "../../components/Message";
import Summary from "../../screens/Summary";
import AvailableTrip from "../../screens/AvailableTrips";
import Trip from "../../screens/Trip";
import Home from "../../screens/Home";
import Tabs from "../../screens/Tabs";
import TripLocation from "../../screens/TripLocation";
import Register from "../../Auth/Register/Register";
import Login from "../../Auth/Login/Login";

// New Screens added
import CreateProfile from "../../AuthFlowEnd/CreateProfile";
import Welcome from "../../AuthFlowEnd/Welcome";
import PassengerTab from "../../PassengerFlow/PassengerTab";
import Ride from "../../PassengerFlow/PsScreens/Ride";
import TripDetails from "../../PassengerFlow/PsScreens/TripDetails";
import Destination from "../../PassengerFlow/PsScreens/Destination";
import Location from "../../PassengerFlow/DriverScreen/Location";
import YourLocationMap from "../../PassengerFlow/DriverScreen/YourLocationMap";
import TripDestination from "../../PassengerFlow/DriverScreen/TripDestination";
import YourDestinationMap from "../../PassengerFlow/DriverScreen/YourDestinationMap";
import Routes from "../../PassengerFlow/DriverScreen/Routes";

//Imported AddStops Screens
import AddStopOvers from '../PassengerFlow/DriverScreen/AddStopOvers';
import AddStop from '../PassengerFlow/DriverScreen/AddStop';

//Imported Set Rules Screen
import SetRuleMessage from '../PassengerFlow/DriverScreen/SetRuleMessage';

const Stack = createNativeStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signup" component={Register} />
      <Stack.Screen index name="login" component={Login} />
      <Stack.Screen name="destination" component={Destination} />
      <Stack.Screen index name="location" component={Location} />
      <Stack.Screen name="crprofile" component={CreateProfile} />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="homepsrides" component={PassengerTab} />
      <Stack.Screen name="main" component={Tabs} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="message" component={Message} />
      <Stack.Screen name="summary" component={Summary} />
      <Stack.Screen name="avatrip" component={AvailableTrip} />
      <Stack.Screen name="trip" component={Trip} />
      <Stack.Screen name="ride" component={Ride} />
      <Stack.Screen name="tripdetails" component={TripDetails} />
      <Stack.Screen name="triplocation" component={TripLocation} />
      <Stack.Screen name="yourlocation" component={YourLocationMap} />
      <Stack.Screen name="tripdestination" component={TripDestination} />
      <Stack.Screen name="yourdestination" component={YourDestinationMap} />
      <Stack.Screen name="AddStopOvers" component={AddStopOvers} />
      <Stack.Screen name="SetRuleMessage" component={SetRuleMessage} />

      //Added AddStops Screens
      <Stack.Screen name="AddStop" component={AddStop} />
      <Stack.Screen name="routes" component={Routes} />


    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
