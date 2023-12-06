import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { ww } from './responsive'

const TripCardSingle = ({origin, country}) => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <Image
                source={require("../../assets/images/Frame_1984_t.png")}
                style={styles.FrameImage}
            />

            <View style={{flexDirection:'column'}}>
            <Text style={styles.txtCard}>{origin}</Text>
            <Text style={styles.txtCard1}>{country}</Text>
            </View>
        </View>

        <Image
            source={require("../../assets/images/arrow_left_up_t.png")}
            style={styles.arrowImg}
        />
    </View>
  )
}

export default TripCardSingle

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:72,
        paddingTop:16, 
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderBottomColor:'gray'
    },
    FrameImage:{ 
        height: ww(32), 
        width: ww(32),
        marginTop:3, 
        marginLeft:8, 
        marginRight:8
    },
    arrowImg:{ 
        height: ww(24), 
        width: ww(24),
        marginTop:6, 
        marginLeft:8, 
        marginRight:12
    },
    txtCard:{
        color:'#0B0C23', 
        fontSize:ww(16),
        fontWeight:'600',
        maxWidth:160
    },
    txtCard1:{
        color:'#0B0C23', 
        fontSize:ww(14),
        fontWeight:'400',
        maxWidth:150
    }
})