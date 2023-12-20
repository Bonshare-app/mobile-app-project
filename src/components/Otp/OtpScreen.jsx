import { StyleSheet, Text, View, Pressable, Keyboard } from 'react-native'
import React,{useState} from 'react'
import OtpBackEnd from './OtpBackEnd';

const OtpScreen = ({inputHeight,inputWidth,containerWidth}) => {
    const [code, setCode] = useState("");
    const [pinReady, setPinReady] = useState(false)

    const max_code_length = 4;

// use pinReady to determine if the Verification Button Should be pressed

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <OtpBackEnd
        setPinReady={setPinReady}
        code={code}
        setCode={setCode}
        maxLength={max_code_length}
        inputHeight={inputHeight}
        inputWidth={inputWidth}
        containerWidth={containerWidth}
      />


    </Pressable>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
})