import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Styles';

export const Login = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://assets.gqindia.com/photos/5cdc07a454004370583c3a84/1:1/w_1080,h_1080,c_limit/top-image94.jpg',
        }}>
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

      <View
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: 'red',
        }}>
        <View style={{marginLeft: 20, marginTop: 20}}>
          <TextInput placeholder="Email Adress" style={styles.EmailAdress} />

          <TextInput placeholder="Password" style={styles.Password} />

          <TextInput style={styles.ForgetText}>Forget Password ?</TextInput>

          <View style={{width: '90%'}}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <Text style={{textAlign: 'center', marginTop: 20}}>
            or Login With
          </Text>

          <View style={{width: '90%', marginTop: 20}}>
            <TouchableOpacity style={styles.GoogleButton}>
              <Image
                source={{
                  uri: 'https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png',
                }}
                style={styles.GoogleImage}
              />
              <Text style={styles.GoogleButtonText}>Continue with Google</Text>
            </TouchableOpacity>
          </View>

          <View style={{width: '90%', marginTop: 20}}>
            <TouchableOpacity style={styles.FacebookButton}>
              <Text style={styles.FacebookButtonText}>
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{width: '90%', marginTop: 20}}>
            <TouchableOpacity style={styles.AppleButton}>
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
