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
  Button,
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
import {useDispatch} from 'react-redux';
import {login} from '../../../Redux/Actions/AuthAction';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    dispatch(login(username, password));
  };

  return (
    <View style={styles.BigBox}>
      <ScrollView
        style={styles.ScrollJi}
        contentContainerStyle={styles.scrollContent}>
        <ImageBackground source={LoginBackground} style={{flex: 1}}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.BackImage}>
                <Image source={backImage} />
              </View>
              <View>
                <Image source={brandLogo} style={styles.HeadingTop} />
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
                value={username}
                placeholder="Email Address"
                style={styles.EmailAdress}
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.BoxJI}>
              <TextInput
                placeholder="Password"
                value={password}
                style={styles.Password}
                secureTextEntry={!showPassword}
                textContentType="password"
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Image source={passImage} style={{marginRight: wp(4)}} />
              </TouchableOpacity>
            </View>
            <Text
              style={styles.ForgetText}
              onPress={() => navigation.navigate('Forget')}>
              Forget Password ?
            </Text>
            <View style={styles.BoxJI}>
              <TouchableOpacity style={styles.Button} onPress={handleLogin}>
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
              <Text
                style={styles.CreateAnAccount}
                onPress={() => navigation.navigate('SignIn')}>
                {' '}
                Create an account.
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
