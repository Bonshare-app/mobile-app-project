import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import ScreenContainer from "../../components/ScreenContainer";
import Text from "../../components/shared/Text";

const Summary = ({ navigation }) => {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.top}>
          <Ionicons
            onPress={() => {
              navigation.goBack();
            }}
            name="md-arrow-back-sharp"
            size={24}
            color="black"
          />
          <View style={styles.center}>
            <View style={styles.imgContainer}>
              <Image source={require("../../../assets/wallet.png")} />
            </View>
            <Text style={styles.topText}>You are about to pay 50 TLR</Text>
            <Text semibold style={styles.bold}>
              50 TLR
            </Text>
            <Text style={styles.tinyText}>
              for a trip from Istanbul to Ankara
            </Text>
          </View>
          <View style={styles.mid}>
            <Ionicons name="md-warning" size={24} color="#2F4FB2" />
            <Text style={styles.detailsText}>
              No worries, your money will only be sent to the driver after the
              journey has been completed.
            </Text>
          </View>
        </View>
        <View style={styles.btm}>
          <TouchableOpacity
            onPress={() => navigation.navigate("message")}
            style={styles.btn}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                textAlign: "center",

                color: "#FFFFFF",
              }}
            >
              Pay 50TLR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top: {
    justifyContent: "space-between",
    flex: 4.5,
  },
  center: {
    alignItems: "center",
  },
  mid: {
    paddingVertical: 12,
    flexDirection: "row",
    gap: 11,
    paddingHorizontal: 15,
    width: "100%",

    backgroundColor: "#ECEFF8",
    borderRadius: 16,
  },
  btm: {
    flex: 3,
    justifyContent: "flex-end",
  },
  inner: {
    flex: 1,
    marginHorizontal: 22,
    marginVertical: 20,
  },
  imgContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#E5F8E2",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    fontSize: 20,
    lineHeight: 30,
    marginTop: 24,
    color: "#0B0C23",
  },
  tinyText: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 17,
    color: "#585858",
  },
  bold: {
    fontSize: 24,
    lineHeight: 36,
    marginTop: 10,
    color: "#0B0C23",
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
    width: "90%",
    color: "#2F4FB2",
  },
  btn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    backgroundColor: "#40B876",
    borderRadius: 18,
  },
});
