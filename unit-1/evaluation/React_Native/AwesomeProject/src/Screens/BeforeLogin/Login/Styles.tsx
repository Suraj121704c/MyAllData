import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  BigBox: {
    backgroundColor: 'black',
   
  },
  HeadingTop: {
    textAlign: 'center',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: 'orange',
    marginTop: hp('1%'),
  },
  HeadingSpan: {
    color: 'black',
  },
  BearDiv: {
    marginTop: hp('15%'),
    marginLeft: wp('5%'),
    marginBottom: hp('2%'),
  },
  LoginText: {
    fontSize: hp('4%'),
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
  },
  LoginSmallText: {
    fontSize: hp('2%'),
    marginTop: hp('1%'),
    color: 'white',
    fontWeight: 'bold',
  },
  EmailAdress: {
    borderColor: 'gray',
    width: '90%',
    marginTop: hp('1%'),
    height: hp('6%'),
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: wp('3%'),
  },
  Password: {
    borderColor: 'gray',
    width: '90%',
    marginTop: hp('2%'),
    height: hp('6%'),
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: wp('3%'),
  },
  ForgetText: {
    textAlign: 'right',
    marginRight: '5%',
    color: 'red',
  },
  Button: {
    backgroundColor: 'orange',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 5,
    marginLeft: wp('5%'),
  },
  ButtonText: {
    color: 'black',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  GoogleButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 2,
    marginLeft: wp('5%'),
  },
  GoogleImage: {
    width: hp('3%'),
    height: hp('3%'),
    marginRight: wp('2%'),
  },
  GoogleButtonText: {
    color: 'gray',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  FacebookButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'blue',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 5,
    marginLeft: wp('5%'),
  },
  FacebookButtonText: {
    color: 'white',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  AppleButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 5,
    marginLeft: wp('5%'),
  },

  NewToBeerStore: {
    textAlign: 'center',
    marginTop: hp('2%'),
    fontSize: hp('1.5%'),
    marginBottom: hp('1%'),
  },

  CurverBox: {
    borderTopLeftRadius: hp('3%'),
    borderTopRightRadius: hp('3%'),
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 2,
  },
  EmailBoxFirst: {
    marginLeft: wp('5%'),
    marginTop: hp('2%'),
  },

  LoginBox: {
    width: '90%',
  },

  orLoginWith: {
    textAlign: 'center',
    marginTop: hp('2%'),
    fontSize: hp('2.5%'),
  },

  ButtonBox: {
    width: '90%',
    marginTop: hp('2%'),
  },

  line: {
    width: wp('80%'),
    height: 1,
    backgroundColor: 'black',
  },

  ScrollJi : {
    flexGrow: 1,
  },

  CreateAnAccount : {
    color: 'red'
  }
});
