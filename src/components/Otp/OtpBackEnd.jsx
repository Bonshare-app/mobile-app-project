import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React,{useRef, useState, useEffect} from 'react'


const OtpBackEnd = ({code, setCode, maxLength, setPinReady,inputWidth,inputHeight ,containerWidth}) => {

    const numCodeArray = new Array(maxLength).fill(0);

    const textInputRef = useRef(null);

    const [inputFocaused, setInputFocaused] = useState(false)

    const handleOnPress =()=>{
        setInputFocaused(true)
        textInputRef?.current?.focus();
    };

    const handleOnBlur = ()=>{
        setInputFocaused(false);
    }

    useEffect(()=>{
        setPinReady(code.length === maxLength)

        return ()=>setPinReady(false)
    },[code])


    const toCodeDigitInput =(_value, index)=>{
        const emptyInputChar = " ";
        const digit = code[index] || emptyInputChar;

        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;

        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

        return(
            <View key={index} 
                style={[styles.otpInput, 
                    inputFocaused && isDigitFocused ? 
                    styles.otpInputActive : styles.otpInputInActive,
                    { width: inputWidth, height: inputHeight }
                ]}
            >
                <Text style={styles.otpInputText}>{digit}</Text>
            </View>
        )
    }

  return (
    <View style={{gap:10}}>
      <Pressable onPress={handleOnPress} style={[styles.otpInputContainer, { width: containerWidth }]}>
        {numCodeArray.map(toCodeDigitInput)}
      </Pressable>

      <TextInput
        value={code}
        onChangeText={setCode}
        style={styles.TextInputStyl}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        ref={textInputRef}
        onBlur={handleOnBlur} 
      />
    </View>
  )
}

export default OtpBackEnd

const styles = StyleSheet.create({
    TextInputStyl:{
        width:1,
        height:1,
        opacity:1
    },
    otpInputContainer:{
        width:210,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    otpInput:{
        borderWidth:2,
        padding:12,
        borderRadius:5
    },
    otpInputInActive:{
        borderColor:'#8A8A99'
    },
    otpInputActive:{
        borderColor:'black'
    },
    otpInputText:{
        fontSize:22,
        fontWeight:"bold",
        color:'black',
        textAlign:'center'
    }
})