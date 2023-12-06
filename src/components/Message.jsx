import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ScreenContainer from "./ScreenContainer";
import { Ionicons } from "@expo/vector-icons";
import Text from "./shared/Text";
const Message = ({ navigation }) => {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.main}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-checkmark" size={24} color="black" />
        </View>
        <Text semibold style={styles.title}>
          Booked Successfully
        </Text>
        <Text semibold style={styles.lightText}>
          You’ll be notified when the driver accept your request.
        </Text>
      </View>
      <View style={styles.btm}>
        <TouchableOpacity
          // onPress={() => navigation.navigate("main")}
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
            View ride
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("main")}
          style={[styles.btn, , styles.outline]}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              textAlign: "center",

              color: "#40B876",
            }}
          >
            Back to home
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 22,
    marginVertical: 50,
  },
  main: {
    alignItems: "center",
    flex: 4,
    justifyContent: "center",
  },
  btm: {
    flex: 1,
    gap: 8,
    justifyContent: "flex-end",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 15,
    borderColor: "#C4E9D5",
    width: 138,
    height: 138,
    backgroundColor: "#40B876",
    borderRadius: 69,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    color: "#0B0C23",
    marginTop: 34,
    marginBottom: 15,
    textAlign: "center",
  },
  lightText: {
    fontSize: 16,
    textAlign: "center",
    color: "#8A8A99",
  },
  btn: {
    width: "100%",
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    backgroundColor: "#40B876",
    borderRadius: 18,
  },
  outline: {
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: "#39A368",
  },
});
