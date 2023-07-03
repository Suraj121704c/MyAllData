import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// user-defining import
import {styles} from './Styles';
import {apple, facebook, google} from '../../../Assests/Utils/images';

const Login = () => {
  return (
    <View style={styles.BigBox}>   
        <ImageBackground
          source={{
            uri: 'https://assets.gqindia.com/photos/5cdc07a454004370583c3a84/1:1/w_1080,h_1080,c_limit/top-image94.jpg',
          }} 
          >
          <View>
            <Text style={styles.HeadingTop}>
              B<Text style={styles.HeadingSpan}>EER STORE</Text>
            </Text>
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
          <TextInput
            placeholder="    Email Address"
            style={styles.EmailAdress}
          />
          <TextInput placeholder="    Password" style={styles.Password} />
          <TextInput style={styles.ForgetText}>Forget Password ?</TextInput>
          <View style={styles.LoginBox}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.orLoginWith}>
            <View style={styles.line} />
            or Login With
          </Text>
          <View style={styles.ButtonBox}>
            <TouchableOpacity style={styles.GoogleButton}>
              <Image source={google} style={styles.GoogleImage} />
              <Text style={styles.GoogleButtonText}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ButtonBox}>
            <TouchableOpacity style={styles.FacebookButton}>
              <Image source={facebook} style={styles.GoogleImage} />
              <Text style={styles.FacebookButtonText}>
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ButtonBox}>
            <TouchableOpacity style={styles.AppleButton}>
              <Image source={apple} style={styles.GoogleImage} />
              <Text style={styles.FacebookButtonText}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.NewToBeerStore}>
            New to The Beer Store?
            <Text style={{color: 'red'}}> Create an account.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
