import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {
  RegisterBackGround,
  apple,
  backImage,
  brandLogo,
  facebook,
  google,
} from '../../../Assests/Utils/images';
import {styles} from './SingIn';

export const SignIn = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground source={RegisterBackGround} style={{flex: 1}}>
          <View style={{marginHorizontal: 20, marginTop: 20}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={backImage} />
              </TouchableOpacity>
              <View>
                <Image source={brandLogo} />
              </View>
            </View>
            <View style={{marginTop: 150, marginBottom: 15}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Register Now !
              </Text>
              <Text style={{marginTop: 10, color: 'white'}}>
                It's time to rock 'n roll! Let's get started now.
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.CurverBox}>
          <View style={styles.EmailBoxFirst}>
            <View style={styles.BoxJI}>
              <TextInput
                placeholder="Email Address"
                style={styles.EmailAdress}
              />
            </View>
            <View style={styles.BoxJI}>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>CREATE AN CreateAnAccount</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.widthHandling}>
              <View style={styles.LineBox}>
                <View style={styles.Line} />
                <View style={styles.orLoginWith}>
                  <Text>or Login With</Text>
                </View>
                <View style={styles.Line} />
              </View>
            </View>
            <View style={styles.BoxJI}>
              <TouchableOpacity style={styles.GoogleButton}>
                <Image source={google} style={styles.GoogleImage} />
                <Text style={styles.GoogleButtonText}>
                  Continue with Google
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.BoxJIFace}>
              <TouchableOpacity style={styles.FacebookButton}>
                <Image source={facebook} style={styles.GoogleImage} />
                <Text style={styles.FacebookButtonText}>
                  Continue with Facebook
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.BoxJiApple}>
              <TouchableOpacity style={styles.AppleButton}>
                <Image source={apple} style={styles.GoogleImage} />
                <Text style={styles.FacebookButtonText}>
                  Continue with Apple
                </Text>
              </TouchableOpacity>
            </View>
              <Text style={styles.BeforeFotterText}>
                By registering, I agree to the Beer Store's{' '}
                <Text style={styles.CreateAnAccount}>{'\n'}Terms & Conditions</Text> and{' '}
                <Text style={styles.CreateAnAccount}>Privacy Policy</Text>
              </Text>
            </View>
            <Text style={styles.NewToBeerStore}>
              Already have an Account?
              <Text
                style={styles.CreateAnAccount}
                onPress={() => navigation.navigate('Login')}>
                Login.
              </Text>
            </Text>
          </View>
      </ScrollView>
    </View>
  );
};
