import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React,{useState} from 'react'
import {FontAwesome5} from '@expo/vector-icons'
import ScreenContainer from '../../components/ScreenContainer';
import { ww } from '../../components/responsive';
import TripCard from '../../components/TripCard';
import TripCardSingle from '../../components/TripCardSingle';
import TripLocationInput from '../../components/TripLocationInput';

const TripLocation = () => {

  const [loHighlight, setLoHighlight] = useState(false)
  const [desHighlight, setDesHighlight] = useState(false)

  return (
    <ScreenContainer color={'#FFFFFF'}>
        <View style={{marginLeft:20}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
              <TouchableOpacity onPress={() =>{}}>
                  <Image
                      source={require("../../../assets/images/Iconx.png")}
                      style={{ height: ww(14), width: ww(14),marginTop:3}}
                  />
              </TouchableOpacity>
              <Text style={{color:'black',fontSize:ww(20),marginLeft:ww(16), width:ww(37),height:ww(24)}}>Trip</Text>
          </View>

          <View style={{flexDirection:'row',alignItems:'center', marginTop:8}}>
            <View style={{flexDirection:'column'}}>
              <TripLocationInput
                placeholder1={'Origin'}
                imgSource={require("../../../assets/images/adjust_t.png")}
                imgStyle={{height: ww(18), width: ww(18)}}
                onPress={()=>console.log('clear txt')}
                onFocus={()=>{
                  setLoHighlight(true)
                  setDesHighlight(false)
                }}
                containerStyle={loHighlight ? {borderWidth:1, borderColor:'#40B876'} : null}
              />
              {/* <View style={{width:ww(350), height:ww(48), backgroundColor:'white',flexDirection:'row',paddingRight:8,paddingLeft:16,alignItems:'center', borderRadius:8}}>
                <Image
                    source={require("../../../assets/images/adjust_t.png")}
                    style={{ height: ww(18), width: ww(18),marginTop:3, marginRight:12}}
                />
                <TextInput
                  placeholder='Origin'
                  style={{flex:1}}
                  onFocus={()=>console.log('Hi')}
                />
                <TouchableOpacity>
                  <Image
                      source={require("../../../assets/images/Vector_t.png")}
                      style={{ height: ww(18), width: ww(18),marginTop:3,marginLeft:12}}
                  />
                </TouchableOpacity>
              </View> */}

              <TripLocationInput
                placeholder1={'Destination'}
                containerStyle={desHighlight ? {borderWidth:1, borderColor:'#40B876',marginTop:8} : {marginTop:8}}
                imgSource={require("../../../assets/images/location_on_t.png")}
                imgStyle={{height: ww(20), width: ww(16)}}
                onPress={()=>console.log('clear destination')}
                onFocus={()=>{
                  setLoHighlight(false)
                  setDesHighlight(true)
                }}
              />

              {/* <View style={{width:ww(350), height:ww(48), backgroundColor:'white',flexDirection:'row',paddingRight:8,paddingLeft:16,alignItems:'center', borderRadius:8, marginTop:8}}>
                <Image
                    source={require("../../../assets/images/location_on_t.png")}
                    style={{ height: ww(20), width: ww(16),marginTop:3, marginRight:12}}
                />
                <TextInput
                  placeholder='Origin'
                  style={{flex:1}}
                />
                <Image
                    source={require("../../../assets/images/Vector_t.png")}
                    style={{ height: ww(18), width: ww(18),marginTop:3,marginLeft:12}}
                />
              </View> */}
            </View>

            <TouchableOpacity>
              <Image
                  source={require("../../../assets/images/Icon_t.png")}
                  style={{ height: ww(18), width: ww(18),marginTop:3, marginLeft:8, marginRight:12}}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{flexDirection:'row', marginTop:16 , width:100}}>
            <FontAwesome5 style={{marginLeft:8, marginRight:12}} name="map-marked-alt" size={18} color="black" />
            <Text>Use map</Text>
          </TouchableOpacity>
        </View>

        <View style={{borderWidth:1, borderColor:'gray', marginTop:16}}></View>

        <View style={{ flex:1, marginHorizontal:20}}>
          {/* I made two kinds of card view based on the figma design */}
          <TripCard origin={'Instanbul'} destination={'Ankara'}/>
          <TripCardSingle origin={'Instanbul'} country={'Turkiye'}/>
        </View>
    </ScreenContainer>
  )
}

export default TripLocation;

const styles = StyleSheet.create({})