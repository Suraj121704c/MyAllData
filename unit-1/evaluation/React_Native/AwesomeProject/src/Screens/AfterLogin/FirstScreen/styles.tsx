import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  BigBox: {
    flex: 1,
    backgroundColor: 'black',
  },
  Scroll: {
    flexGrow: 1,
  },
  HeaderBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: hp(2),
    alignItems: 'center',
  },
  DrawerJi: {
    marginLeft: wp(5),
  },
  DrawerButton: {
    color: 'white',
    fontSize: hp(5),
  },
  Order: {
    marginRight: wp(5),
  },
  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: hp(2),
    marginLeft: wp(5),
    marginRight: wp(5),
    height: hp(6),
    alignContent: 'center',
  },
  SearchImage: {
    marginRight: 10,
  },
  SearchText: {
    flex: 1,
    fontSize: wp(4),
    color: 'black',
  },
  SecondBigBox: {
    backgroundColor: 'white',
    marginTop: hp(3),
    flex: 1,
  },
  What: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(6),
    marginRight: wp(6),
    alignItems: 'center',
  },
  WhatText: {
    fontSize: hp(2.3),
    fontWeight: 'bold',
    color: 'black',
  },
  WhatButton: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 5,
    padding: 5,
  },
  WhatButtonText: {
    color: 'black',
  },
  Start: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(6),
    marginRight: wp(6),
    marginBottom: hp(1),
    alignItems: 'center',
    backgroundColor: '#FFF0F2',
    padding: wp(5),
    borderRadius: wp(3),
  },
  StartText: {
    fontSize: hp(2.3),
    fontWeight: 'bold',
    marginLeft: wp(2),
    color: 'black',
  },
  StartButton: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'orange',
  },
  StartButtonText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(6),
    marginRight: wp(6),
    marginTop: hp(3),
    alignItems: 'center',
    color: 'black',
  },
  New: {
    fontSize: hp(2.3),
    fontWeight: 'bold',
    color: 'black',
  },
  NewBox: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 5,
    padding: 5,
  },
  NewBoxText: {
    color: 'black',
  },
  Courosal3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  BewarBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(6),
    marginRight: wp(6),
    alignItems: 'center',
  },
  BeerText: {
    fontSize: hp(2.3),
    fontWeight: 'bold',
    color: 'black',
  },
  BearBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: hp(2),
    width: '95%',
    marginLeft: wp(4),
    marginBottom: hp(4),
  },
  BeerBox1: {
    borderWidth: 1,
    padding: wp(5),
    alignItems: 'center',
    borderColor: 'gray',
  },
  BeerBox1Image: {
    height: hp(7),
    width: wp(4.8),
  },
  BeerBox1ImageText: {
    fontWeight: 'bold',
    color: 'black',
  },
  BeerBox2Image: {
    borderWidth: 1,
    padding: wp(5),
    alignItems: 'center',
    borderColor: 'gray',
  },
  BeerBox2ImageJi : {
    height: hp(7),
    width: wp(6),
  },
});
