import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { ww } from "./responsive";

const AvailableTop = ({ navigation }) => {
  const [canEdit, setCanEdit] = useState(true);
  return (
    <View style={styles.container}>
      <View style={[styles.container2, { justifyContent: "space-between" }]}>
        <View
          style={[
            styles.row2,
            {
              alignItems: "center",
              marginLeft: 20,
              width: 183,
              height: ww(47),
            },
          ]}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/images/Iconx.png")}
              style={{ height: ww(14), width: ww(14), marginRight: ww(20) }}
            />
          </TouchableOpacity>

          {/* Column */}
          <View>
            {/* Row */}
            <View style={[styles.row1]}>
              {canEdit ? (
                <Text style={styles.txt16}>Instnbull</Text>
              ) : (
                <TextInput style={styles.edTxt} placeholder="Instnbull" />
              )}
              <Image
                source={require("../../assets/images/Vector-1522.png")}
                style={{ height: 10, width: 5 }}
              />
              {canEdit ? (
                <Text style={styles.txt16}>Rabat</Text>
              ) : (
                <TextInput style={styles.edTxt} placeholder="Rabat" />
              )}
            </View>

            <Text
              style={{ fontSize: ww(14), color: "#8A8A99", fontWeight: "400" }}
            >
              Saturday, 24 July
            </Text>
          </View>
        </View>

        <View style={[styles.row2, { alignItems: "center" }]}>
          <Text style={{ fontSize: ww(14) }}>24</Text>

          <TouchableOpacity onPress={() => setCanEdit(!canEdit)}>
            <Image
              source={require("../../assets/images/Vector-1522.png")}
              style={{ marginHorizontal: ww(33) }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AvailableTop;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#FFFFFF",
    marginTop: 40,
  },
  container2: {
    height: 56,
    backgroundColor: "#FFFFFF",
    marginTop: 12,
    marginHorizontal: 20,
    borderRadius: 400,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 2,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    width: ww(143),
    height: ww(24),
    justifyContent: "space-between",
    // backgroundColor:'green',
  },
  row2: {
    flexDirection: "row",
  },
  txt16: {
    fontSize: ww(16),
  },
  edTxt: {
    borderWidth: 1,
    width: ww(65),
    height: ww(24),
    paddingHorizontal: 3,
  },
});
