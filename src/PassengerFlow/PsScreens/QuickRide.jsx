import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useRef, useMemo, useCallback} from 'react'
import MapView from 'react-native-maps'
import BottomSheet from '@gorhom/bottom-sheet'
import { tcolors } from '../../components/theme'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'


const QuickRide = () => {
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => [260], []);
  
    // callbacks
    const handleSheetChanges = useCallback((index) => {
      console.log('handleSheetChanges', index);
    }, []);
    

    const QkIcons = [
        {
            text:'Where to?',
            text2:'',
            icon:()=>(<Ionicons name="location" size={24} color={tcolors.secondary}/>)
        },
        {
            text:'Work',
            text2:'14 Abaji colse, Garki ABuja',
            icon:()=>(<Ionicons name="briefcase-outline" size={24} color="black" />)
        },
        {
            text:'Home',
            text2:'14 Abaji colse, Garki ABuja',
            icon:()=>(<AntDesign name="home" size={24} color="black" />)
        },
    ]
  
    
  
    return (
      <View style={{flex:1}}>
        <MapView
          initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          }}
  
          style={styles.mapStyle}
      >
  
      </MapView>
          {/* <View style={styles.btmShet}></View> */}
      <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
      >
          <View style={styles.contentContainer}>
            {
                QkIcons.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index} style={[styles.cardStyle,{borderWidth: index===0 ?1 :0}]}>
                            {item.icon()}
                            <View>
                                <Text style={{fontSize:20,fontWeight:"600"}}>{item.text}</Text>
                                {
                                    item.text2 !=='' ? <Text style={{fontSize:16}}>{item.text2}</Text>:null
                                }
                            </View>
                        </TouchableOpacity>
                    )
                })
            }       
                    
          </View>
      </BottomSheet>
      </View>
    )
  }
  
  export default QuickRide;
  
  const styles = StyleSheet.create({
      btmShet:{
          width:200, 
          height:200, 
          zIndex:4, 
          backgroundColor:'gray',
          position:'absolute',
          bottom:0
      },
      mapStyle: {  
          // position: 'absolute',  
          // top: 0,  
          // left: 0,  
          // right: 0,  
          // bottom: 0,  
          flex:1
      },
      contentContainer: {
          flex: 1,
          paddingHorizontal:20,
          backgroundColor:'#F9F9F9'
          // alignItems: 'center',
      },
      cardStyle:{
        borderWidth:1,
        marginTop:10,
        flexDirection:"row",
        height:60,
        alignItems:'center',
        paddingHorizontal:10,
        gap:10,
        borderRadius:10,
        borderColor:'gray'
      }
  })