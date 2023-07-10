import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {BrandIcon, TBSLogo} from '../../../Assests/Utils/images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Image source={BrandIcon} style={{height: 50, width: 60}} />
      <Image source={TBSLogo} style={{height: 100, width: 130}} />
    </View>
  );
};

export default SplashScreen;
