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

        <View style={styles.CurverBox}>
          <View style={styles.EmailBoxFirst}>
            <TextInput placeholder="Email Address" style={styles.EmailAdress} />

            <TextInput placeholder="Password" style={styles.Password} />

            <TextInput style={styles.ForgetText}>Forget Password ?</TextInput>

            <View style={styles.LoginBox}>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.orLoginWith}>or Login With</Text>

            <View style={styles.ButtonBox}>
              <TouchableOpacity style={styles.GoogleButton}>
                <Image
                  source={{
                    uri: 'https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png',
                  }}
                  style={styles.GoogleImage}
                />
                <Text style={styles.GoogleButtonText}>
                  Continue with Google
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonBox}>
              <TouchableOpacity style={styles.FacebookButton}>
                <Image
                  source={{
                    uri: 'https://freepngimg.com/save/141243-logo-circle-facebook-free-hq-image/512x512',
                  }}
                  style={styles.GoogleImage}
                />
                <Text style={styles.FacebookButtonText}>
                  Continue with Facebook
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonBox}>
              <TouchableOpacity style={styles.AppleButton}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxChXjgBTSmGJKsCbcZJdiZ0ox3A8lBof3Pg&usqp=CAU',
                  }}
                  style={styles.GoogleImage}
                />
                <Text style={styles.FacebookButtonText}>
                  Continue with Apple
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.NewToBeerStore}>
              New to The Beer Store?
              <Text style={{color: 'red'}}> Create an account.</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
