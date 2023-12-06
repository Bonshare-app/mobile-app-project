import { View, StyleSheet } from "react-native";
import Available from "../../components/Available";
import Available2 from "../../components/Available2";
import AvailableTop from "../../components/AvailableTop";
import AvailableBotton from "../../components/AvailableBotton";
import ScreenContainer from "../../components/ScreenContainer";

const AvailableTrip = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <AvailableTop navigation={navigation} />
        <View style={styles.container}>
          <Available navigation={navigation} />
          <Available2 navigation={navigation} />
        </View>
        <AvailableBotton />
      </View>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#F3F6F4",
  },
});
export default AvailableTrip;
