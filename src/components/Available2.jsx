import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ww } from "./responsive";

const Available2 = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("trip")}
      style={[styles.container, styles.shadowProps]}
    >
      <View style={styles.parent}>
        <View style={styles.firstDiv}>
          <Text style={styles.time}>9:00 A.M</Text>
          <Text style={(styles.hamria, { fontSize: ww(14) })}>3h,23m</Text>
          <Text style={styles.time}>12:23 A.M</Text>
        </View>
        <View style={styles.secondDiv}>
          <Image source={require("../../assets/images/adjust.png")} />
          <Image source={require("../../assets/images/Vector-14.png")} />
          <Image source={require("../../assets/images/location_on.png")} />
        </View>
        <View style={styles.thirdDiv}>
          <View style={styles.ist}>
            <View>
              <Text style={styles.istText}>Istanbul</Text>
              <Text style={styles.hamria}>Hamria,Crystal Palace</Text>
            </View>
            {/* <Ionicons name="chevron-forward" size={24} color="black" /> */}
          </View>
          <View style={styles.ist}>
            <View>
              <Text style={styles.istText}>Izmir</Text>
              <Text style={styles.hamria}>Hamria,Black Cafe</Text>
            </View>
            {/* <Ionicons name="chevron-forward" size={24} color="black" /> */}
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.imgDiv}>
            <Image
              style={{ height: ww(40), width: ww(40) }}
              source={require("../../assets/images/Ellipse_21.png")}
            />
            <Image
              source={require("../../assets/images/verified_user.png")}
              style={styles.verified}
            />
          </View>
          <View>
            <Text style={{ fontSize: ww(16) }}>Hicham</Text>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../../assets/images/Icon_star.png")} />
              <Text style={{ fontSize: ww(14) }}>4(23)</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Image
            style={styles.vectorImg}
            source={require("../../assets/images/Vector.png")}
          />
          <Text style={{ fontSize: ww(16) }}>2/3</Text>
        </View>
        <Text style={styles.bigText}>48TL</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // borderWidth:3,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginVertical: 12,
    elevation: 2,
    // shadowOffset:"2"
  },
  shadowProps: {
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
    // shadowOpacity:0.2,
  },
  time: {
    fontWeight: "bold",
    fontSize: ww(16),
    color: "#121337",
  },
  firstDiv: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 3,
  },
  parent: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
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
  istText: {
    fontWeight: "bold",
    fontSize: ww(18),
  },
  hamria: {
    color: "#424256",
    fontWeight: "400",
    fontSize: ww(16),
  },
  ist: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bigText: {
    color: "#40B876",
    fontSize: ww(24),
    fontWeight: "bold",
  },
  verified: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  imgDiv: {
    marginRight: 8,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#F4F4F6",
    borderTopWidth: 2,
    padding: 4,
    alignItems: "center",
  },
  vectorImg: {
    height: ww(13.19),
    width: ww(11.92),
    marginTop: 4,
    marginRight: 3,
  },
});

export default Available2;
