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
    fontSize: hp(3),
    fontWeight: 'bold',
    color: 'orange',
    marginTop: hp(1),
  },
  BackImage: {
    marginTop: hp(2),
    marginLeft: wp(1),
  },
  HeadingSpan: {
    color: 'black',
  },
  BearDiv: {
    marginTop: hp(15),
    marginLeft: wp(5),
    marginBottom: hp(2),
  },
  LoginText: {
    fontSize: hp(4),
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
  },
  LoginSmallText: {
    fontSize: hp(2),
    marginTop: hp(1),
    color: 'white',
    fontWeight: 'bold',
  },
  EmailAdress: {
    height: hp(6),
    marginLeft: wp(3),
    flex: 1,
  },
  Password: {
    height: hp(6),
    marginLeft: wp(3),
    flex: 1,
  },
  ForgetText: {
    textAlign: 'right',
    marginRight: '5%',
    color: 'red',
  },

  Button: {
    backgroundColor: 'orange',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    flex: 1,
  },

  ButtonBox: {
    width: '80%',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    flex: 1,
  },

  ButtonText: {
    color: 'black',
    fontSize: hp(2),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  GoogleButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  GoogleImage: {
    width: hp(3),
    height: hp('3%'),
    marginRight: wp(2),
  },
  GoogleButtonText: {
    color: 'gray',
    fontSize: hp(2),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  FacebookButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  FacebookButtonText: {
    color: 'white',
    fontSize: hp(2),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  AppleButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  NewToBeerStore: {
    textAlign: 'center',
    marginTop: hp('2%'),
    fontSize: hp('1.5%'),
    marginBottom: hp('1%'),
  },

  CurverBox: {
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
  },
  EmailBoxFirst: {
    marginLeft: wp(5),
    marginTop: hp(2),
  },

  orLoginWith: {
    textAlign: 'center',
    marginTop: hp(2),
    fontSize: hp(2),
    width: 100,
  },


  ScrollJi: {
    flexGrow: 1,
  },

  CreateAnAccount: {
    color: 'red',
  },

  LineBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },

  Line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginTop: 20,
  },

  BoxJI: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: wp(0.2),
    width: '87%',
    marginTop : hp(2),
    borderRadius : wp(2)
  },
  BoxJIFace: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: wp(0.2),
    width: '87%',
    backgroundColor: 'blue',
    marginTop : hp(2),
    borderRadius : wp(2)
  },
  BoxJiApple: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: wp(0.2),
    width: '87%',
    backgroundColor: 'black',
    marginTop : hp(2),
    borderRadius : wp(2)
  },

  widthHandling : {
    width: '96%',
  }
});
