import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/shared/Text'// FROM REUSABLE COMPONENTS
import { tcolors } from '../components/theme'
import { LinearGradient } from 'expo-linear-gradient'

const Welcome = ({navigation}) => {

    setTimeout(()=>{
        navigation.navigate('homepsrides')
    },2000)
  return (
    <View style={styles.container}>
        {/* Location image */}
        {/* <View style={{width:148, height:144, backgroundColor:"#c0c0c0"}}></View> */}

        <Text
            style={{fontSize:44, textAlign:'center'}} semibold={true}
        >
            Welcome to {'\n'}Bonshare
        </Text>
        
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text
                style={{fontSize:18,width:"80%", textAlign:"center"}} light={true}
            >
                Your rides at cheaper prices
            </Text>
            <Image 
                source={require('../../assets/twfouradded/cathat.png')}
                style={{width:34, height:34, marginLeft:-10}}
            />
        </View>

        <LinearGradient
            colors={['transparent', 'gray','white']}  // 'transparent' at the top, 'white' at the bottom
            style={{height:332}}
        >
        <Image 
            source={require('../../assets/twfouradded/welcome.png')}
        />
        </LinearGradient>

        <Text
            style={{fontSize:20, textAlign:"center"}} light={true}
        >
            Customize your experience
        </Text>

        <ActivityIndicator size={"large"} color={tcolors.primary}/>

    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:"16%",
        gap:10,
        paddingHorizontal:20,
        backgroundColor:tcolors.white
    }
})