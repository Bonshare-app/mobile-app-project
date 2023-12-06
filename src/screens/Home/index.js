import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
  Linking,
  Button,
  Pressable,
  Image,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Text from "../../components/shared/Text";

// import MapViewDirections from "react-native-maps-directions";

const Home = ({ navigation }) => {
  useEffect(() => {}, []);

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    // console.log("handleSheetChanges", index);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.mapView}>
        <MapView
          // provider={PROVIDER_GOOGLE}
          // region={{
          //   latitude: vendor.latitude,
          //   longitude: vendor.longitude,
          //   latitudeDelta: 0.0043,
          //   longitudeDelta: 0.0034,
          // }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {/* <Marker
                  title="My location"
                  description="current address"
                  coordinate={{
                    latitude: location?.coords.latitude,
                    longitude: location?.coords.longitude,
                  }}
                  draggable
                  pinColor="pink"
                /> */}
          {/* <MapViewDirections
                  origin={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                  }}
                  destination={{
                    latitude: 8.48202194071932,
                    longitude: 4.6294809621146795,
                  }}
                  apikey={GOOGLE_MAPS_APIKEY}
                /> */}
          {/* <Marker
                  title={vendor.companyname}
                  description={vendor.address}
                  coordinate={{
                    latitude: vendor.latitude,
                    longitude: vendor.longitude,
                  }}
                  // draggable
                  pinColor="blue"
                /> */}
        </MapView>
        <View style={styles.topBtns}>
          <TouchableOpacity style={styles.iconBtn}>
            <MaterialIcons name="menu" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications" size={24} color="black" />
            <View style={styles.noti}></View>
          </TouchableOpacity>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
        handleIndicatorStyle={{
          backgroundColor: "#E7E7EB",
          width: 82,
          height: 6,
        }}
        onChange={handleSheetChanges}
      >
        <View
          style={{
            paddingHorizontal: 30,
            paddingVertical: 24,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 3,
              marginVertical: 12,
            }}
          >
            <Image source={require("../../../assets/ellipse.png")} />
            <View
              style={{
                marginLeft: 12,
                borderBottomColor: "#8A8A99",
                borderBottomWidth: 1,
                paddingBottom: 8,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 18 }} color={"#8A8A99"}>
                Leaving from
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 3,
              marginVertical: 12,
            }}
          >
            <Image source={require("../../../assets/location_on.png")} />
            <View
              style={{
                marginLeft: 12,
                borderBottomColor: "#8A8A99",
                borderBottomWidth: 1,
                paddingBottom: 8,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 18 }} color={"#8A8A99"}>
                Traveling to
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                paddingVertical: 3,
                marginRight: 8,
                marginVertical: 12,
              }}
            >
              <Image source={require("../../../assets/date.png")} />
              <View
                style={{
                  marginLeft: 12,
                  borderBottomColor: "#8A8A99",
                  borderBottomWidth: 1,
                  paddingBottom: 8,
                  flex: 1,
                }}
              >
                <Text style={{ fontSize: 18 }} color={"#8A8A99"}>
                  Date
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                paddingVertical: 3,
                marginLeft: 8,
                marginVertical: 12,
              }}
            >
              <Image source={require("../../../assets/user.png")} />
              <View
                style={{
                  marginLeft: 12,
                  borderBottomColor: "#8A8A99",
                  borderBottomWidth: 1,
                  paddingBottom: 8,
                  flex: 1,
                }}
              >
                <Text style={{ fontSize: 18 }} color={"#8A8A99"}>
                  1
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("avatrip")}
            style={styles.btn}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                textAlign: "center",

                color: "#fff",
              }}
            >
              Search rides
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: { height: "100%" },
  flex: {
    display: "flex",
  },
  topBtns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    paddingHorizontal: 30,
    top: 60,
    left: 0,
    width: "100%",
  },
  mapView: {
    width: "100%",
    height: "100%",
    flex: 1,
    borderRadius: 7,
    position: "relative",
    overflow: "hidden",
  },
  iconBtn: {
    width: 48,
    height: 48,
    position: "relative",
    borderRadius: 24,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  noti: {
    position: "absolute",
    width: 8,
    borderRadius: 4,
    height: 8,
    backgroundColor: "red",
    top: 12,
    right: 15,
  },
  btn: {
    width: "100%",
    marginVertical: 32,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    backgroundColor: "#40B876",
    borderRadius: 24,
  },
  outline: {
    borderColor: "#39A368",
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: "#39A368",
  },
});
