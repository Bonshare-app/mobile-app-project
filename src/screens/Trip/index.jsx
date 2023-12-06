import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenContainer from "../../components/ScreenContainer";

export default function Trip({ navigation }) {
  return (
    // <SafeAreaView>
    <ScreenContainer>
      <View style={styles.container}>
        <View>
          <View style={{ paddingLeft: 21, paddingRight: 27 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconBox}
            >
              <Ionicons name="arrow-back-sharp" size={24} color="#121337" />
            </TouchableOpacity>
            <Text style={styles.text}>Saturday, 24 July</Text>
            <View style={styles.parent}>
              <View style={styles.firstDiv}>
                <Text style={styles.time}>9:00 A.M</Text>
                <Text style={(styles.hamria, { fontSize: 14 })}>3h,23m</Text>
                <Text style={styles.time}>12:23 A.M</Text>
              </View>
              <View style={styles.secondDiv}>
                <Image source={require("../../../assets/images/adjust.png")} />
                <Image
                  source={require("../../../assets/images/Vector-14.png")}
                />
                <Image
                  source={require("../../../assets/images/location_on.png")}
                />
              </View>
              <View style={styles.thirdDiv}>
                <View style={styles.ist}>
                  <View>
                    <Text style={styles.istText}>Istanbul</Text>
                    <Text style={styles.hamria}>Hamria,Crystal Palace</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
                <View style={styles.stop}>
                  <Text style={styles.hamria}>2 stops</Text>
                  <AntDesign name="down" size={20} color="black" />
                </View>
                <View style={styles.ist}>
                  <View>
                    <Text style={styles.istText}>Izmir</Text>
                    <Text style={styles.hamria}>Hamria,Black Cafe</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.first}>
            <View>
              <Text style={styles.hamria}>Price for one passenger</Text>
              <Text style={styles.bigText}>50 TLR</Text>
            </View>
            <View style={styles.details}>
              <Text>details</Text>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </View>
          <View style={styles.biggersecond}>
            <Text style={styles.hamria}>Driver details</Text>
            <View style={styles.second}>
              <View style={styles.third}>
                <View style={styles.divt}>
                  <Image source={require("../../../assets/images/Elli.png")} />
                  <Image
                    source={require("../../../assets/images/Frame_1986.png")}
                    style={styles.frame}
                  />
                  <Image
                    source={require("../../../assets/images/verified_user.png")}
                    style={styles.verified}
                  />
                </View>
                <View>
                  <Text style={styles.aish}>Aish Cheng</Text>
                  <Text style={styles.hamria}>4.2(21)</Text>
                </View>
              </View>
              {/* <Image source={require("../assets/images/Vector 1522.png")}
			 style={styles.rightArrow} 
			  /> */}
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </View>
          <View style={styles.fourth}>
            <Text style={styles.passengerText}>Passengers</Text>
            <View style={styles.fifth}>
              <View style={styles.third}>
                <View style={styles.imgDiv}>
                  <Image
                    source={require("../../../assets/images/Ellipse-22.png")}
                    style={styles.img}
                  />
                  <Image
                    source={require("../../../assets/images/verified_user.png")}
                    style={styles.verified}
                  />
                </View>
                <View>
                  <Text style={styles.aish}>Aish Cheng</Text>
                  <Text style={styles.hamria}>Istanbul-Kashmir</Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
            <View style={styles.fifth}>
              <View style={styles.third}>
                <View style={styles.imgDiv}>
                  <Image
                    source={require("../../../assets/images/Ellipse-23.png")}
                    style={styles.img}
                  />
                  <Image
                    source={require("../../../assets/images/verified_user.png")}
                    style={styles.verified}
                  />
                </View>
                <View>
                  <Text style={styles.aish}>Aish Cheng</Text>
                  <Text style={styles.hamria}>Istanbul-Izmir</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </View>
        </View>
        <Button
          pressed={() => navigation.navigate("summary")}
          style={{ alignSelf: "center" }}
          text="Continue"
        />
      </View>
    </ScreenContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
    marginBottom: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
  rightArrow: {
    height: 10,
    width: 10,
    objectFit: "contain",
  },
  text: {
    marginBottom: 24,
    fontSize: 20,
    lineHeight: 30,
    color: "#424256",
    fontWeight: "600",
    paddingLeft: 4,
  },
  ist: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bigText: {
    fontSize: 24,
    color: "#121337",
    fontWeight: "bold",
  },
  first: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderTopWidth: 2,
    borderColor: "#E7E7EB",
    alignItems: "center",
    paddingLeft: 21,
    paddingRight: 27,
  },
  biggersecond: {
    padding: 10,
    borderTopWidth: 2,
    borderColor: "#E7E7EB",
    paddingLeft: 21,
    paddingRight: 27,
  },
  second: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  third: {
    flexDirection: "row",
    alignItems: "center",
  },
  aish: {
    fontWeight: "bold",
  },
  img: {
    marginRight: 5,
  },
  fourth: {
    borderTopWidth: 2,
    borderColor: "#E7E7EB",
    padding: 10,
    paddingLeft: 21,
    paddingRight: 27,
  },
  fifth: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  passengerText: {
    marginVertical: 10,
  },
  time: {
    fontWeight: "bold",
    fontSize: 16,

    color: "#121337",
  },
  firstDiv: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 3,
  },
  secondDiv: {
    marginRight: 10,
    marginLeft: 10,
    alignItems: "center",
    flex: 1,
  },
  thirdDiv: {
    flex: 7,
    gap: 10,
    justifyContent: "space-between",
  },
  parent: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  istText: {
    fontWeight: "bold",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
  },
  verified: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  imgDiv: {
    marginRight: 8,
  },
  frame: {
    position: "absolute",
    top: 100,
    left: 0,
  },
  divt: {
    marginRight: 8,
  },
  stop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  hamria: {
    color: "#424256",
    fontWeight: "400",
  },
  iconBox: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    height: 56,
    marginBottom: 8,
  },
});
