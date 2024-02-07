import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Button2 from "../components/Button2";
import Text from "../components/shared/Text"; //REUSABLE TEXT

const CreateProfile = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Location image */}
        {/* <View ></View> */}
        <Image
          source={require("../../assets/twfouradded/bglocation.png")}
          style={{ width: 148, height: 144 }}
        />

        <Text style={{ fontSize: 24 }} bold={true}>
          Enable location
        </Text>
        <Text
          style={{ fontSize: 18, width: "80%", textAlign: "center" }}
          light={true}
        >
          Enable your location to help us find you at the right spot
        </Text>
      </View>
      <Button2
        text={"Go to settings"}
        onPress={() => navigation.navigate("welcome")}
      />
    </View>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
