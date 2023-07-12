import React, {useState, useEffect} from 'react';
import {View, Image, Dimensions, StyleSheet, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Slider1, Slider2, Slider3} from '../Assests/Utils/images';

const CarouselItem = ({item}) => (
  <View style={styles.slide}>
    <Image source={item.source} style={styles.image} />
  </View>
);

const Courosal = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {id: '1', source: Slider2},
    {id: '2', source: Slider1},
    {id: '3', source: Slider3},
  ];

  useEffect(() => {
    const handleScreenRotation = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', handleScreenRotation);

    return () => {
      Dimensions.removeEventListener('change', handleScreenRotation);
    };
  }, []);

  const renderItem = ({item}) => <CarouselItem item={item} />;

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.9}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationDotInactive}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
    height: hp(30),
    width: '100%',
    justifyContent: 'center',
  },
  slide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: '93%',
    height: hp(20),
    resizeMode: 'cover',
    borderRadius: wp(5),
  },
  paginationDotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: 'gray',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: 'orange',
  },
});

export default Courosal;
