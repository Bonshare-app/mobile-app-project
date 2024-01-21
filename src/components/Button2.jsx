import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { tcolors } from './theme'

const Button2 = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.txtStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button2

const styles = StyleSheet.create({
    container:{
        backgroundColor:tcolors.primary,
        height:54,
        width:"85%",
        borderRadius:60,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginVertical:30
        
    },
    txtStyle:{
        color:tcolors.white,
        fontSize:18,
        
    }
})