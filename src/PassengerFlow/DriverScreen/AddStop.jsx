import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, Pressable, TextInput, Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather, Entypo } from "@expo/vector-icons";
 
const AddStop = ({ navigation, placeholder, onChangeText, onClear }) => {
  //const [start, setStart] = useState(['Istanbul']);
  const [stopOvers, setStopOvers] = useState([['Istanbul'], ['Izmir']]);

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

  const [searchText, setSearchText] = useState('');

  const handleClear = () => {
    setSearchText('');
    onChangeText(''); // Optional: Call the provided callback to clear state in parent component
    onClear(''); // Optional: Call the provided callback to clear state in parent component
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff',}}>
      <View style={{flex: 1, padding: 0}}>
        {/* Back Arrow To Navigate to the previous screen */}
        <View style={{flexDirection:'row',alignItems:"", justifyContent: "space-between"}}>
          <TouchableOpacity onPress={() =>{
            navigation.navigate('AddStopOvers')
          }}>
            <Ionicons name="arrow-back-sharp" style={{color: "#232323", fontSize: 24, width: 24, height: 24, top: 50, left: 20}}/>

          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 24, fontWeight: "600", width: 372, height: 40, top: 60, left: 21, }}>Add Stops</Text>
        <Text style={{ fontSize: 14, fontWeight: "400", width: 350, height: 100, top: 60, left: 21 }}>Add a location where you’d like to stop for passengers to get in or drop off.</Text>


        {/* functionality to add more stops */}
        {/* <Pressable 
            onPress={() =>{
                navigation.navigate('addstop')}}
            style={{
            borderColor: "transparent",
            padding: 10,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#232323',
            marginRight: 190}}>
            <Text style={{color: "#232323", fontSize: 20, }}>+ Add Stop</Text>
        </Pressable> */}
        <View style={{flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 0,
                      paddingVertical: 8,
                      marginLeft: 20,
                      marginRight: 30,
                      top: 10,
                      borderRadius: 8,
                      borderWidth: 2,
                      borderColor: "#232323"}}>
          <TextInput
            style={{flex: 1,fontSize: 16, color: '#000', backgroundColor: "#fff", opacity: 0.9, paddingHorizontal: 15}}
            placeholder={ placeholder || 'Pendik'}
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <Feather name="x" size={24} style={{marginLeft: 10}} onPress={handleClear} />
          )}
        </View>

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
                top: 240,
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

export default AddStop;
