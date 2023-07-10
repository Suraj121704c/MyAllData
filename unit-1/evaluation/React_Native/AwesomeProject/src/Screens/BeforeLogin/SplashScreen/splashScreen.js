import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {TBSLogo} from '../../../Assests/Utils/images';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
      <Image source={TBSLogo} style={{height: 100, width: 130}} />
    </View>
  );
};

export default SplashScreen;
