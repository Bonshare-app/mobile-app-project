import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, ProgressBar, Pressable, Animated  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

 
const AddStopOvers = ({ navigation }) => {
  //const [start, setStart] = useState(['Istanbul']);
  const [stopOvers, setStopOvers] = useState(['Istanbul']);

  //Adding Stop Overs Functionality
  const addStopover = (location) => {
    setStopOvers((prevStopOvers) => [...prevStopOvers, [location]]);
  };

  // Corrected reference to 'stops'
  const removeStopOvers = (index) => {
    const newStopOvers = [...stopOvers]; // Use stopOvers instead of stops
    newStopOvers.splice(index, 2);
    setStopOvers(newStopOvers);
  };

  // Corrected logic for adding stopovers
  const handleAddStopOvers = () => {
    const addedStopOvers = [...stopOvers];
    addedStopOvers.push(''); // Add an empty string for the new stopover
    setStopOvers(addedStopOvers);
  };

  
  //Propgress Bar Hooks
  const [progress, setProgress] = useState(new Animated.Value(0));

  //Progress Bar Function
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedValue = new Animated.Value(0);

  return (
    <View style={{flex: 1, backgroundColor: '#fff',}}>
      <View style={{flex:1, padding:0}}>
        {/* Back Arrow To Navigate to the previous screen */}
        <View style={{flexDirection:'row', justifyContent: "space-between", alignItems: ""}}>
          <TouchableOpacity onPress={() =>{
            navigation.navigate
          }}>
            <Ionicons name="arrow-back-sharp" style={{color: "#232323", fontSize: 24, width: 24, height: 24, top: 50, left: 20}}/>

          </TouchableOpacity>
          <Text style={{ color: "#232323", fontSize: 14, width: 58, height: 32, top: 50, left: -25}}>step 2/5 </Text>
        </View>

        {/* <View style={{borderBottomWidth: 5, borderColor: '#232323', width:"100%", top: 50}}/> */}
        {/* <ProgressBar progress={progress} width={200} color="blue"> </ProgressBar> */}
        <View style={styles.containerProgressBar}>
          <Animated.View style={[styles.bar ]} />
        </View>
       

        <Text style={{ fontSize: 24, fontWeight: "600", width: 346, height: 110, top: 60, left: 21}}>Add stopovers to get more passengers <Text style={{ fontSize: 16, fontWeight: "400"}}>(Optional)</Text></Text>
        <Text style={{ fontSize: 14, fontWeight: "400", width: 383, height: 100, top: 18, left: 21}}>Popular stops based on your route preference.</Text>

        {stopOvers.map((stopOver, index, location) => (
          <ListItem key={index} >
            <View>
            {/* <Image
              source={require("../../../assets/images/adjust.png")}
              style={{top: ""}}
            />
            <Image
              source={require("../../../assets/images/Vector-14.png")}
              style={{top: "", left: 7.5}}
            />
            <Image
              source={require("../../../assets/images/location_on.png")}
              style={{top: "", left: ""}}
            /> */}
            </View>
            <ListItem.Content style={{display:"flex", flexDirection:"row", alignItems:"center", right: 120, top:-50}}>
                <View style={{display:"flex", justifyContent: "center", alignSelf:"center", alignItems:""}}>
                    <Image
                    source={require("../../../assets/images/adjust.png")}
                    style={{top: 4}}
                    />
                    <Image
                    source={require("../../../assets/images/Vector-14.png")}
                    style={{top: "", left: 7.5}}
                    />
                    <Image
                    source={require("../../../assets/images/location_on.png")}
                    style={{top: -4, left: "", tintColor:'navy'}}
                    />
                </View>
            <View style={{left:5}}>
                <ListItem.Title style={{marginBottom: 100}}>{stopOver}</ListItem.Title>
                <ListItem.Title>{location}</ListItem.Title>
            </View>

            <View style={{ height: 1, backgroundColor: 'gray', marginHorizontal: 10 }} />
            
            </ListItem.Content>
            <TouchableOpacity style={{top:-50}} onPress={() => removeStopOvers(index)}>
                <Image
                source={require("../../../assets/images/Iconx.png")}
                
                />
            </TouchableOpacity>
          </ListItem>
        ))}

        {/* functionality to add more stops */}
        <Pressable 
            onPress={() => {
              navigation.navigate('AddStop')
            }}
            style={{
            borderColor: "transparent",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#232323',
            marginRight: 250,
            left: 20,
            top: -40}}>
            <Text style={{color: "#232323", fontSize: 20, }}>+ Add Stop</Text>
        </Pressable>

        {/* Navigation button */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Pressable 
                onPress={() => navigation.push('Next')} 
                style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingRight: 130,
                paddingLeft: 130,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#232323',
                top: 100,
                position: "relative",
                backgroundColor: "#000035"
                }}>
                <Text style={{color: "#fff", fontSize: 20,}}>Next</Text>
            </Pressable>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
    marginBottom: 20,
  },
  containerProgressBar: {
    height: 5,
    top: 40,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    marginTop: 10,
    width: 400
  },
  bar: {
    height: 5,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 75,
  },
  containerInner: {
    flex: 1,
    padding: 40
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

export default AddStopOvers;
