import { View, Text,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import TopHeader from '../../Comp/TopHeader';
import SelectInput from '../Register/Partials/SelectInput';
import OtpVerification from '../Register/Partials/OtpVerification';
import Button from '../../Comp/Button';

const Login = ({navigation}) => {
  const [stage, setStage] = useState(1);
  const [label, setLabel] = useState("Next");
  const handleClick = () => {
    if (stage === 1) {
      setStage(2);
      setLabel("Verify")
     
      // setFooter("Already registered?")
    } 
  };
  const handleBack = () => {
    // setStage((prev) => prev - 1);
    setStage((prev) => Math.max(prev - 1, 1));
  };
  return (
    <View>
      <View className=" bg-white h-full justify-between flex p-4">
      {stage === 1 ? (
        <View className="p-4">
          <View className="bg-re pt-4">
            <TopHeader
              moreClass={"w-full flex  items-center"}
              content={"We’ll text you a code to verify your phone"}
              header={"Enter your phone number "}
            />
          </View>
          <View className="flex flex-row my-2  w-full">
            <SelectInput />
          </View>
        </View>
      ) :  (
        <OtpVerification back={handleBack} login={"login"}/>
      ) }
      <View className="space-y-0.5 w-full flex items-center">
        <Button label={label} onPress={handleClick} />
        <View className="flex flex-row gap-1">
          <Text>Don’t have an account?</Text>
          <TouchableOpacity
            className={``}
            onPress={() => {
              navigation.navigate('signup');
            }}
          >
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  )
}

export default Login