import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React,{useState} from 'react'
import { ww } from './responsive'

const AvailableBotton = () => {
    // Test data
    const items = [{item:23},{item:24},{item:25},{item:26},{item:27},]

    const [selItem, setSelItem] = useState(1)
  return (
    <View style={[styles.container,{justifyContent:'space-between'}]}>
        <View style={[styles.container]}>
            {
                items.map((itx,index)=>(
                    <TouchableOpacity 
                        onPress={()=>setSelItem(index)} 
                        style={selItem === index ? styles.circle : styles.circle1} key={index}
                        >
                        <Text style={selItem === index ? styles.txtSt : styles.txtSt1}>
                            {itx.item}
                        </Text>
                    </TouchableOpacity>
                ))
            }
            

            <View style={{backgroundColor:'#8A8A99',width:1, height:ww(34),marginTop:13}}></View>
        </View>

        <TouchableOpacity style={styles.btn}>
            <Image
                source={require("../../assets/images/filter_list.png")}
                style={{height:12, width:18}}
            />

            <Text style={{fontSize:ww(18),color:'#FFFFFF',marginLeft:11}}>Filter</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AvailableBotton

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:ww(56)
    },
    circle:{
        height:ww(40),
        width:ww(40),
        borderRadius:20,
        marginTop:11,
        backgroundColor:'#40B876',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:ww(6)
    },
    circle1:{
        height:ww(40),
        width:ww(40),
        borderRadius:20,
        marginTop:11,
        // backgroundColor:'#40B876',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:ww(6)
    },
    txtSt:{
        fontSize:ww(16), 
        color:'white'
    },
    txtSt1:{
        fontSize:ww(16), 
        color:'black'
    },
    btn:{
        backgroundColor:'#0B0C23',
        height:ww(40),
        width:ww(108),
        marginVertical:8,
        marginRight:ww(20),
        borderRadius:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})