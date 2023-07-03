import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  HeadingTop: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'yellow',
    marginTop : 5
  },
  HeadingSpan: {
    color: 'black',
  },
  BearDiv: {
    marginTop: 100,
    marginLeft: 20,
    marginBottom: 10,
  },
  LoginText: {
    fontSize: 30,
    textAlign: 'left',
    color: 'white',
    fontWeight : 'bold'
  },
  LoginSmallText: {
    fontSize: 15,
    marginTop: 10,
    color: 'white',
    fontWeight : 'bold'
  },

  EmailAdress: {
    borderColor: 'gray',
    width: '90%',
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft : 10
  },
  Password: {
    borderColor: 'gray',
    width: '90%',
    marginTop: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft : 10
  },
  ForgetText: {
    textAlign: 'right',
    marginRight: 25,
    color: 'red',
  },
  Button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft : 10
  },
  ButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  GoogleButton: {
    flexDirection: 'row',
    justifyContent : "space-evenly",
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 2,
    marginLeft : 10
  },
  GoogleImage : {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  GoogleButtonText: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  FacebookButton: {
    flexDirection: 'row',
    justifyContent : "space-evenly",
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft : 10
  },
  FacebookButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  AppleButton: {
    flexDirection: 'row',
    justifyContent : "space-evenly",
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft : 10
  },

  NewToBeerStore: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },

  CurverBox : {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: 'white',
    backgroundColor : "white",
    borderWidth: 2,
  }
});
