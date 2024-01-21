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

const Stack = createNativeStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="signup" component={Register}/>
      <Stack.Screen name="login" component={Login}/> */}
      <Stack.Screen name="crprofile" component={CreateProfile} />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="homepsrides" component={PassengerTab} />
      {/* <Stack.Screen name="main" component={Tabs} /> */}
      {/* <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="message" component={Message} />
      <Stack.Screen name="summary" component={Summary} />
      <Stack.Screen name="avatrip" component={AvailableTrip} />
      <Stack.Screen name="trip" component={Trip} />
      <Stack.Screen name="triplocation" component={TripLocation} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
