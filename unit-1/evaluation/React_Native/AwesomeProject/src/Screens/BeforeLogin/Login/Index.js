import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

// user-defining import
import {styles} from './Styles';
import {
  LoginBackground,
  apple,
  backGround,
  backImage,
  brandLogo,
  facebook,
  google,
  passImage,
} from '../../../Assests/Utils/images';

const Login = ({ navigation }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.BigBox}>
      <ScrollView style={styles.ScrollJi} contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={LoginBackground} style={{flex : 1}}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Image source={backImage} style={styles.BackImage} />
              </View>
              <View>
                <Image source={brandLogo} style={styles.HeadingTop}/>
              </View>
              <View></View>
            </View>
            <View style={styles.BearDiv}>
              <Text style={styles.LoginText}>Login</Text>
              <Text style={styles.LoginSmallText}>
                Its time to rock n roll! Lets gets started now.
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
              <TextInput
                placeholder="Password"
                style={styles.Password}
                secureTextEntry={!showPassword}
                textContentType="password"
              />
              <Image source={passImage} style={{marginRight: wp(4)}} />
            </View>     
            <Text style={styles.ForgetText} onPress={() => navigation.navigate('Forget')}>Forget Password ?</Text>      
            <View style={styles.BoxJI}>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>LOGIN</Text>
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
            <Text style={styles.NewToBeerStore}>
              New to The Beer Store?
              <Text style={styles.CreateAnAccount} onPress={() => navigation.navigate('SignIn')}> Create an account.</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;