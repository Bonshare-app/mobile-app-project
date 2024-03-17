import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Animated, Pressable, TouchableOpacity, ProgressBarAndroidComponent, ProgressBarAndroidBase} from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import { Bar } from 'react-native-progress';


const SetRuleMessage = () => {
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [smokingAllowed, setSmokingAllowed] = useState(false);
  const [talkingPreference, setTalkingPreference] = useState(false);
  const [minimalNoise, setMinimalNoise] = useState(false);
  const [phoneCallPreference, setPhoneCallPreference] = useState(false);
  const [music, setNoMusic] = useState(false);
  const [intrusiveQuestions, setIntrusiveQuestions] = useState(false);
  const [message, setMessage] = useState('');

  const handlePublishRide = () => {
    // Implement logic to save profile data and publish ride
    alert('Profile created and ride published!');
  };

  //Character Counter and Limiter
    const [textInput, setTextInput] = useState("");
    const [wordCount, setWordCount] = useState(0);

  //Handle Change Text
  const handleChangeText = (newText) => {
    setTextInput(newText);
    // Update word count whenever text changes
    setWordCount(newText.trim().split(' ').length);
  }

  //Progress Bar
  //const progress = useRef(new Animated.Value(0)).current;
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <View className="p-0 h-full w-screen">
      {/* Back Arrow To Navigate to the previous screen */}
      <View className="flex-row justify-between">

        <TouchableOpacity onPress={() =>{
          navigation.navigate
        }}>
          <Ionicons name="arrow-back-sharp" className="text-gray-500 text-2xl w-6 h-8 mt-12 ml-4"/>

        </TouchableOpacity>
        <Text className="text-gray-500 text-sm w-14 h-8 mt-14 mr-4">step 5/5 </Text>
      </View>

        {/* <View style={{borderBottomWidth: 5, borderColor: '#232323', width:"100%", top: 50}}/> */}
        {/* <ProgressBar progress={progress} width={200} color="blue" className="h-2 bg-gray-300 rounded-sm -mt-1"> </ProgressBar> */}
        
        <View >
          {/* <Animated.View className="h-2 bg-green-600 rounded-xs w-10" /> */}
          <Bar className="h-2 border-gray-300 rounded-xs bg-gray-300" progress={1} color='green' width={400}/>
        </View>

      <Text className="text-2xl font-bold h-20 mt-6 ml-5">Is there anything you'd like your passengers to know? </Text>

      {/* Rules Buttons */}
      <View className="flex items-center justify-between w-full -mt-7 ml-5">
            {/* Pets */}
            <Pressable 
                onPress={() => setPetsAllowed(true)} 
                style={{
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 40,
                paddingLeft: 40,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#989898',
                top: 50,
                position: "absolute",
                backgroundColor: "white",
                left: 0,
                width: 110,
                height: 42,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center'
                }}>
                <Text className="text-sm -ml-7 text-black-900 font-semibold">No Pets</Text>
                <FontAwesome 
                  onPress={() => setPetsAllowed(!petsAllowed)}
                  name={petsAllowed ? "circle-o" : "check-circle"}
                  style={{
                    fontSize: 18,
                    borderColor: "#000",
                    left:18}}
                  color={petsAllowed ? '#d3d3d3' : 'green'}
                  />
            </Pressable>

            {/* Smoking */}
            <Pressable 
                onPress={() => setSmokingAllowed(true)} 
                style={{
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 40,
                paddingLeft: 40,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#989898',
                top: 50,
                position: "absolute",
                backgroundColor: "white",
                left: 120,
                width: 140,
                height: 42,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center'
                }}>
                <Text className="text-sm -ml-7 text-black-900 font-semibold">No smoking</Text>
                <FontAwesome 
                  onPress={() => setSmokingAllowed(!smokingAllowed)}
                  name={smokingAllowed ? "circle-o" : "check-circle"}
                  style={{
                    fontSize: 18,
                    borderColor: "#000",
                    left:18}}
                  color={smokingAllowed ? '#d3d3d3' : 'green'}
                  />
            </Pressable>
            
            {/* Moderate Talking */}
            <Pressable 
                onPress={() => setTalkingPreference(true)} 
                style={{
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 40,
                paddingLeft: 40,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#989898',
                top: 100,
                position: "absolute",
                backgroundColor: "white",
                left: 0,
                width: 170,
                height: 42,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center'
                }}>
                <Text className="text-sm -ml-7 text-black-900 font-semibold">Moderate talking</Text>
                <FontAwesome 
                  onPress={() => setTalkingPreference(!talkingPreference)}
                  name={talkingPreference ? "circle-o" : "check-circle"}
                  style={{
                    fontSize: 18,
                    borderColor: "#000",
                    left:18}}
                  color={talkingPreference ? '#d3d3d3' : 'green'}
                  />
            </Pressable>

            {/* Minimal Noise */}
            <Pressable 
                onPress={() => setMinimalNoise(true)} 
                style={{
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 40,
                paddingLeft: 40,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#989898',
                top: 100,
                position: "absolute",
                backgroundColor: "white",
                left: 180,
                width: 150,
                height: 42,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center'
                }}>
                <Text className="text-sm -ml-7 text-black-900 font-semibold">Minimal Noise</Text>
                <FontAwesome 
                  onPress={() => setMinimalNoise(!minimalNoise)}
                  name={minimalNoise ? "circle-o" : "check-circle"}
                  style={{
                    fontSize: 18,
                    borderColor: "#000",
                    left:15}}
                  color={minimalNoise ? '#d3d3d3' : 'green'}
                  />
            </Pressable>
            
            {/* Moderate Phonecalls */}
            <Pressable 
                onPress={() => setPhoneCallPreference(true)} 
                style={{
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 40,
                paddingLeft: 40,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#989898',
                top: 150,
                position: "absolute",
                backgroundColor: "white",
                left: 0,
                width: 200,
                height: 42,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center'
                }}>
                <Text className="text-sm -ml-7 text-black-900 font-semibold">Moderate phonecalls</Text>
                <FontAwesome 
                  onPress={() => setPhoneCallPreference(!phoneCallPreference)}
                  name={phoneCallPreference ? "circle-o" : "check-circle"}
                  style={{
                    fontSize: 18,
                    borderColor: "#000",
                    left:24}}
                  color={phoneCallPreference ? '#d3d3d3' : 'green'}
                  />
            </Pressable>
            
            {/* Music */}
            <Pressable 
                onPress={() => setNoMusic(true)} 
                style={{
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 40,
                paddingLeft: 40,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#989898',
                top: 150,
                position: "absolute",
                backgroundColor: "white",
                left: 210,
                width: 120,
                height: 42,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center'
                }}>
                <Text className="text-sm -ml-7 text-black-900 font-semibold">No music</Text>
                <FontAwesome 
                  onPress={() => setNoMusic(!music)}
                  name={music ? "circle-o" : "check-circle"}
                  style={{
                    fontSize: 18,
                    borderColor: "#000",
                    left:20}}
                  color={music ? '#d3d3d3' : 'green'}
                  />
            </Pressable>
            
            {/* Intrusive Question */}
            <Pressable 
                onPress={() => setIntrusiveQuestions(true)} 
                style={{
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 40,
                paddingLeft: 40,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#989898',
                top: 200,
                position: "absolute",
                backgroundColor: "white",
                left: 0,
                width: 200,
                height: 42,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center'
                }}>
                <Text className="text-sm -ml-7 text-black-900 font-semibold">No intrusive questions</Text>
                <FontAwesome 
                  onPress={() => setIntrusiveQuestions(!intrusiveQuestions)}
                  name={intrusiveQuestions ? "circle-o" : "check-circle"}
                  style={{
                    fontSize: 18,
                    borderColor: "#000",
                    left:20}}
                  color={intrusiveQuestions ? '#d3d3d3' : 'green'}
                  />
            </Pressable>

        </View>
      {/* Message */}
      <View className="mt-24">
          <Text className="mt-44 text-lg font-semibold ml-5 -mb-3">Message <Text className="text-base font-light"> (Optional) </Text> </Text>
          <Text></Text>
        <TextInput
          multiline={true}
          placeholder="eg. Please feel free to act normal during the journey. I'm allergic to smoking but pets are welcomed"
          value={textInput}
          numberOfLines={6}
          onChangeText={handleChangeText}
          maxLength = {50}
          className="h-36 mr-5 ml-5 border-2 rounded-xl border-gray-400 placeholder:px-4 placeholder:pb-20"
        />
        <Text className="text-xs mt-1 ml-80" style={{right: -30}} color= {wordCount <= 50 ? 'gray' : 'red'}>{textInput}/50</Text>
      </View>

      {/* Navigation button */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Pressable 
                onPress={() => navigation.push('')} 
                className="rounded-full mt-10 w-96 px-20 py-4"
                style={{backgroundColor: "#000035"}}
                >
                <Text className="text-base text-white justify-center align-middle outline-none text-center">Publish ride</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default SetRuleMessage;
