import { View, Text,StyleSheet,TouchableOpacity } from "react-native";
import Button from "../../components/Button"

const PassengerDetails = () => {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	  };
	
	  const handleMouseLeave = () => {
		setIsHovered(false);
	  };
  return <View>
	  	<Text style={styles.bigText}>How many of you are going?</Text>
	  	<View style={styles.flex}>
			  <TouchableOpacity style={styles.btn}><Text>-</Text></TouchableOpacity>
		  		<Text style={styles.num}>1</Text>
			  <TouchableOpacity style={styles.btn}><Text>+</Text></TouchableOpacity>
	 	 </View>
	  <Button style={{ alignSelf: "center" }} text="Continue" onPressIn={handleMouseEnter} onPressOut={handleMouseLeave} />
	  {isHovered&&<View style={styles.box}>
		  <Text>
			  clicking on continue takes you back to the homepage
		  </Text>
	  </View>}
  </View>;
};

export default PassengerDetails;

const styles= StyleSheet.create({
	bigText:{
	
		fontSize:24,
		lineHeight:24,
		color:"#0B0C23",
	},
	num:{
		fontSize:40,
		color:"#0B0C23",
	},
	flex:{
		flexDirection:"row",
		justifyContent:"space-between",
		marginVertical:16,

	},
	btn:{
		width:40,
		height:40,
		borderRadius:50
	},
	box:{
		height:100,
		borderRadius:8,
		marginVertical:10
	}
})
