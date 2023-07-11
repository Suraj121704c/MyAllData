import React, {useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {
  Bottle1,
  Bottle2,
  BrandLogo,
  OrderImage,
  passImage,
} from '../../Assests/Utils/images';
import Slider from '../../Components/Slider';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Courosal2 from '../../Components/Slider3';
import {Directions, ScrollView} from 'react-native-gesture-handler';
import Courosal from '../../Components/Slider2';

const FirstScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView style={{flexGrow: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginTop: hp(2),
            alignItems: 'center',
          }}>
          <View style={{marginLeft: wp(5)}}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={{color: 'white', fontSize: hp(5)}}>=</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image source={BrandLogo} />
          </View>
          <View style={{marginRight: wp(5)}}>
            <TouchableOpacity>
              <Image source={OrderImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f2f2f2',
            borderRadius: 10,
            paddingHorizontal: 15,
            marginTop: hp(2),
            marginLeft: wp(5),
            marginRight: wp(5),
            height: hp(6),
            alignContent: 'center',
          }}>
          <Image source={passImage} style={{marginRight: 10}} />
          <TextInput
            style={{flex: 1, fontSize: wp(4), color: 'black'}}
            placeholder="Search 100+ brands of beer..."
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: hp(3),
            flex: 1,
          }}>
          <View>
            <Slider />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: wp(6),
              marginRight: wp(6),
              marginTop: hp(1),
              alignItems: 'center',
            }}>
            <Text style={{fontSize: hp(2.3), fontWeight: 900}}>
              See What's On Sale
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 5,
                padding: 5,
              }}>
              <Text>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Courosal />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: wp(6),
              marginRight: wp(6),
              marginTop: hp(1),
              alignItems: 'center',
            }}>
            <Text style={{fontSize: hp(2.3), fontWeight: 900}}>What's New</Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 5,
                padding: 5,
              }}>
              <Text>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Courosal2 />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: wp(6),
              marginRight: wp(6),
              alignItems: 'center',
            }}>
            <Text style={{fontSize: hp(2.3), fontWeight: 900}}>
              Bear Categories
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems : "center",
              marginTop : hp(2),
              width : "95%",
              marginLeft: wp(6),
              marginBottom : hp(2)
            }}>
            <View style={{borderWidth : 1 , padding : wp(6), alignItems : "center"}}>
              <Image source={Bottle1} />
              <Text>Domestic</Text>
            </View>
            <View style={{borderWidth : 1 , padding : wp(6) , alignItems : "center"}}>
              <Image source={Bottle2} />
              <Text>Import</Text>
            </View>
            <View style={{borderWidth : 1 , padding : wp(6) , alignItems : "center"}}>
              <Image source={Bottle1} />
              <Text>Ontario</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FirstScreen;
