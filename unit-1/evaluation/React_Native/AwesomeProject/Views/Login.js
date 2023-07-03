import React from 'react';
import {Button, ImageBackground, Text, TextInput, View} from 'react-native';

export const Login = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            color: 'yellow',
          }}>
          B<Text style={{color: 'black'}}>EER STORE</Text>
        </Text>

        <View style={{marginTop: 100, marginLeft: 20}}>
          <Text style={{fontSize: 20, textAlign: 'left'}}>Login</Text>
          <Text style={{fontSize: 15}}>
            Its time to rock n roll! Lets gets started now.
          </Text>
        </View>
      </View>

      <View style={{marginLeft: 20, height: 300}}>
        <TextInput
          placeholder="Email Adress"
          style={{
            borderColor: 'gray',
            width: '90%',
            marginTop: 10,
            height: 40,
            borderWidth: 1,
            borderRadius: 8,
          }}
        />

        <TextInput
          placeholder="Password"
          style={{
            borderColor: 'gray',
            width: '90%',
            marginTop: 20,
            height: 40,
            borderWidth: 1,
            borderRadius: 8,
          }}
        />

        <TextInput style={{textAlign: 'right', marginRight: 25, color: 'red'}}>
          Forget Password ?
        </TextInput>

        <View style={{width: '90%'}}>
          <Button title="LOGIN" color={'black'} />
        </View>

        <Text style={{textAlign: 'center', marginTop: 20}}>or Login With</Text>

        <View style={{width: '90%', marginTop: 20}}>
          <Button title="Continue with Google" color={'black'} />
        </View>

        <View style={{width: '90%', marginTop: 20}}>
          <Button title="Cotinue with Facebook" color={'black'} />
        </View>

        <View style={{width: '90%', marginTop: 20}}>
          <Button title="Continue with Apple" color={'black'} />
        </View>

        <Text style={{textAlign: 'center' , marginTop : 20}}>
          New to The Beer Store?{' '}
          <Text style={{color: 'red'}}>Create an account.</Text>
        </Text>
      </View>
    </View>
  );
};
