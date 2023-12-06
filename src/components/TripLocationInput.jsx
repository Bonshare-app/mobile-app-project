import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ww } from './responsive'

const TripLocationInput = ({imgSource,imgStyle,placeholder1,onPress,containerStyle,...others}) => {
  return (
    <View style={[styles.container,containerStyle]}>
        <Image
            source={imgSource}
            style={[styles.localImageStyle,imgStyle]}
        />
        <TextInput
            placeholder={placeholder1}
            style={{flex:1}}
            {...others}
        />
        <TouchableOpacity onPress={onPress}>
            <Image
                source={require("../../assets/images/Vector_t.png")}
                style={{ height: ww(18), width: ww(18),marginTop:3,marginLeft:12}}
            />
        </TouchableOpacity>
    </View>
  )
}

export default TripLocationInput

const styles = StyleSheet.create({
    container:{
        width:ww(350), 
        height:ww(48), 
        backgroundColor:'#F3F6F4',
        flexDirection:'row',
        paddingRight:8,
        paddingLeft:16,
        alignItems:'center', 
        borderRadius:8
    },
    localImageStyle:{
        marginTop:3, 
        marginRight:12
    }
})