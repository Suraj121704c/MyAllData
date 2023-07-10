import React, {useState, useEffect} from 'react';
import {View, FlatList, Image, Dimensions, StyleSheet} from 'react-native';
import {Slider1, Slider2, Slider3} from '../Assests/Utils/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Slider = () => {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  const images = [
    {id: '1', source: Slider2},
    {id: '2', source: Slider1},
    {id: '3', source: Slider3},
  ];

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image source={item.source} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const {width} = Dimensions.get('window');
const slideWidth = width;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2),
    height: hp(20),
  },
  slide: {
    width: slideWidth,
    alignItems: 'center',
    justifyContent: 'top',
  },
  image: {
    width: wp(90),
    height: hp(20),
    resizeMode: 'cover',
    borderRadius: wp(5),
  },
});

export default Slider;
