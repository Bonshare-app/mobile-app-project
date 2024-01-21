import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { View,StatusBar } from "react-native";
import RootNavigation from "./src/navigations/rootnavigation";
import { store, persistor } from "./configureStore";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";



import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";

const Pages = () => {
  // const { loading } = useSelector((state) => state.root.loadingReducer);

  return (
    <>
    <StatusBar barStyle={"dark"}/>
      <RootNavigation />
      {/* {loading && <Loading />} */}
    </>
  );
};

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View onLayout={onLayoutRootView}></View>
          <Pages />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
