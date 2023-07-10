import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import { BrandIcon } from '../../../Assests/Utils/images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor : "black"}}>
      <Image source={BrandIcon} style={{height : 80 , width : 80}}/>
    </View>
  );
};

export default SplashScreen;
