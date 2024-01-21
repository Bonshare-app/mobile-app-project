import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Modal } from 'react-native'
import React,{useRef, useMemo, useCallback, useState} from 'react'
import MapView from 'react-native-maps'
import BottomSheet from '@gorhom/bottom-sheet'
import { tcolors } from '../../components/theme'
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Button2 from '../../components/Button2'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const CityToCity = () => {

    const [modalVisible, setModalVisible] = useState(false)

    const [countBtn, setCountBtn] = useState(true)
    const [numUsers, setNumUsers] = useState(1)
    const bottomSheetRef = useRef(null);

    const ltbottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['50%'], []);

    const lTsnapPoints = useMemo(() => ['34%'], []);
  
    // callbacks
    const handleSheetChanges = useCallback((index) => {
      console.log('handleSheetChanges', index);
    }, []);

    // callbacks
    const lThandleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
      }, [])
    

    const topArr = [
        {
            text:'Find ride',
            icon:()=>(<Ionicons name="search" size={20} color={'gray'} />)
        },
        {
            text:'Offer ride',
            icon:()=>(<MaterialCommunityIcons name="steering" size={20} color="gray" />)
        },
    ]

    const locationData = [
        {
            text:'18, 34704 Ataşehir, İstanbul, Türkiye',
            icon:()=>(<MaterialCommunityIcons name="record-circle" size={24} color="#EE462F" />)
        },
        {
            text:'18, 34704 Ataşehir, İstanbul, Türkiye',
            icon:()=>(<Ionicons name="location" size={20} color={tcolors.secondary}/>)
        },
    ]

    const addUser =()=>{
        setCountBtn(true)
        setNumUsers((num)=>num + 1)
    }

    const subUser =()=>{
        setCountBtn(false)
        if(numUsers > 1 ){
            setNumUsers((num)=>num - 1)
        }
    }
  
    
  
    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // Adjust this value as needed
        >  
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
                <View style={styles.switchyTab}>
                    {
                        topArr.map((item,index)=>{
                            return(
                                <View key={index} style={index === 0 ? styles.tbTypeContainer : styles.notCurrentflow}>
                                    {item.icon()}
                                    <Text style={{fontSize:16}}>{item.text}</Text>
                                </View>
                            )
                        })
                    }
                    
                </View>

                <View>
                    {
                        locationData.map((item,index)=>{
                            return(
                                <View key={index} style={{flexDirection:'row',width:"100%",marginVertical:10, gap:4}}>
                                    {item.icon()}  
                                    <Text style={{borderBottomWidth:1,width:"90%", fontSize:16}}>
                                        {item.text}
                                    </Text>
                                </View>
                            )
                        })
                    }
    
                </View>

                <View style={{flexDirection:'row',justifyContent:"space-between"}}>

                    {/* Left */}
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center',marginTop:10}}>
                        <MaterialCommunityIcons 
                            name="calendar-month-outline" 
                            size={24} color="black" 
                        />

                        <Text style={{borderBottomWidth:1, width:"50%"}}>
                            Wed, Jan 3
                        </Text>
                    </TouchableOpacity>
                    {/* Right */}
                    <TouchableOpacity
                        onPress={()=>setModalVisible(true)} 
                        style={{flexDirection:'row',alignItems:'center',marginTop:8}}
                    >
                        <MaterialIcons 
                            name="person-outline" 
                            size={28} color="black"
                            style={{}}
                             
                        />

                        <Text style={{borderBottomWidth:1, width:"50%",}}>
                            {numUsers}
                        </Text>
                    </TouchableOpacity>
                </View>


                <Button2
                    text={'Search a ride and prices'} 
                /> 
                
            </View>
        </BottomSheet>


        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            
        >
        <View style={{flex:1,backgroundColor:'rgba(128, 128, 128, 0.5)'}}>

          {/* Small Sheet */}
            <BottomSheet
                ref={ltbottomSheetRef}
                index={0}
                snapPoints={lTsnapPoints}
                onChange={lThandleSheetChanges}
            >
                <View style={{flex:1, backgroundColor:'#F9F9F9'}}>
                    <Text style={{fontSize:24, fontWeight:"500",textAlign:'center'}}>Select seats</Text>

                    <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:10,paddingHorizontal:40}}>
                        <TouchableOpacity onPress={()=>subUser()}>
                            <AntDesign 
                                name="minuscircleo" size={40} 
                                color={countBtn ? "gray":tcolors.secondary} 
                            />
                        </TouchableOpacity>
                        <Text style={{fontSize:38}}>{numUsers}</Text>
                        <TouchableOpacity onPress={()=>addUser()}>
                            <Ionicons 
                                name="add-circle-outline" 
                                size={46} color={countBtn ? tcolors.secondary : "gray"} 
                            />
                        </TouchableOpacity>
                    </View>
                    <Button2
                        text={'Done'}
                        onPress={() => setModalVisible(false)}
                    />
                </View>
            </BottomSheet> 
        </View>
      </Modal>

          
        </View>
      </KeyboardAwareScrollView>
    )
  }
  
  export default CityToCity;
  
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
      centerText:{
          textAlign:'center',
      },
      switchyTab:{
        backgroundColor:"#c0c0c0",
        height:50,marginTop:20,
        borderRadius:30,
        padding:5,
        flexDirection:'row'
    },
    tbTypeContainer:{
        backgroundColor:tcolors.white,
        width:"52%",
        height:40,
        borderRadius:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:4
    },
    notCurrentflow:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:4
    }  
  })