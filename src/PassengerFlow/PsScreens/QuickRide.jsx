import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useRef, useMemo, useCallback, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import { tcolors } from "../../components/theme";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const QuickRide = () => {
  // Display Profile Notification Pop-Up
  const [displayPopUp, setDisplayPopUp] = useState(true);

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => [260], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const QkIcons = [
    {
      text: "Where to?",
      text2: "",
      icon: () => (
        <Ionicons name="location" size={24} color={tcolors.secondary} />
      ),
    },
    {
      text: "Work",
      text2: "14 Abaji colse, Garki ABuja",
      icon: () => <Ionicons name="briefcase-outline" size={24} color="black" />,
    },
    {
      text: "Home",
      text2: "14 Abaji colse, Garki ABuja",
      icon: () => <AntDesign name="home" size={24} color="black" />,
    },
  ];

  const popBars = [
    { bar: 1, color: "#40B876" },
    { bar: 2, color: "#40B876" },
    { bar: 3, color: "#40B876" },
    { bar: 4, color: "#c0c0c0" },
    { bar: 5, color: "#c0c0c0" },
  ];

  const onRegionChange = (region) => {
    console.log(region);
  };
  const api='AIzaSyBGL5i6B51hnevK_LeLcPJwaXWIXOEZ1Gs'

  return (
    <View style={{ flex: 1 }}>
      {/* Floating completed profile box */}
      {displayPopUp ? (
        <View style={styles.floatingDialogBox}>
          <View style={styles.profilePopSection}>
            <Image
              source={require("../../../assets/twfouradded/profilepop.png")}
              style={{ width: 40, height: 40 }}
            />

            <View style={{ flexDirection: "column", flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Complete your profile setup
              </Text>
              <Text style={{ fontSize: 12, color: "gray" }}>
                Verify email • Upload profile photo
              </Text>
            </View>

            <TouchableOpacity onPress={() => setDisplayPopUp(false)}>
              <Ionicons name="close-sharp" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {/* Bottom green bars */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 2,
              paddingHorizontal: 4,
              marginBottom: 4,
            }}
          >
            {/* Bar */}
            {popBars.map((item, index) => (
              <View
                key={item.bar}
                style={[styles.completionBar, { backgroundColor: item.color }]}
              ></View>
            ))}
          </View>
        </View>
      ) : null}

      <MapView
        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        onRegionChange={onRegionChange}
        style={styles.mapStyle}
        apiKey={api}
        provider={PROVIDER_GOOGLE}
      ></MapView>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          {QkIcons.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[styles.cardStyle, { borderWidth: index === 0 ? 1 : 0 }]}
              >
                {item.icon()}
                <View>
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    {item.text}
                  </Text>
                  {item.text2 !== "" ? (
                    <Text style={{ fontSize: 16 }}>{item.text2}</Text>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </BottomSheet>
    </View>
  );
};

export default QuickRide;

const styles = StyleSheet.create({
  floatingDialogBox: {
    width: "80%",
    maxWidth: 300,
    height: 60,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    zIndex: 2,
    bottom: 280,
    left: 10,
    borderRadius: 10,
  },
  profilePopSection: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 4,
    paddingHorizontal: 4,
    gap: 4,
  },
  completionBar: {
    height: 5,
    flex: 1,
  },
  btmShet: {
    width: 200,
    height: 200,
    zIndex: 4,
    backgroundColor: "gray",
    position: "absolute",
    bottom: 0,
  },
  mapStyle: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F9F9F9",
    // alignItems: 'center',
  },
  cardStyle: {
    borderWidth: 1,
    marginTop: 10,
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    borderRadius: 10,
    borderColor: "gray",
  },
});
