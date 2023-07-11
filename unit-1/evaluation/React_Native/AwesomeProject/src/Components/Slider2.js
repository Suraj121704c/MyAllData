import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MossHead, Polll} from '../Assests/Utils/images';

const Courosal = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {id: '1', source: MossHead},
    {id: '2', source: Polll},
    {id: '3', source: MossHead},
  ];

  useEffect(() => {
    const handleScreenRotation = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', handleScreenRotation);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <View style={styles.leftView}>
        <Text style={styles.title}>MossHead Cucumber Lime Mojito Shaker</Text>
        <Text style={styles.subtitle}>24 * Can 473 ml</Text>
        <Text style={styles.price}>
          $69 <Text style={styles.discount}>$48</Text>
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightView}>
        <Image source={item.source} style={styles.image} />
      </View>
    </View>
  );

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
    borderWidth : 0.2,
    borderColor : "gray",
    borderRadius : 10
  },
  leftView: {
    width: '48%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightView: {
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  image: {
    width: wp(35),
    height: hp(20),
    resizeMode: 'cover',
    borderRadius: wp(5),
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp(4.0), // Adjust font size based on screen size
    marginBottom: hp(1),
  },
  subtitle: {
    fontSize: wp(3.5), // Adjust font size based on screen size
    marginBottom: hp(1),
  },
  price: {
    fontWeight: 'bold',
    fontSize: wp(4.5), // Adjust font size based on screen size
  },
  discount: {
    color: 'red',
  },
  button: {
    backgroundColor: 'orange',
    width: wp(20),
    paddingVertical: hp(1.0),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
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
