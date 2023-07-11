import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MossHead, Polll, ShakerLogo, Whislist} from '../Assests/Utils/images';

const Courosal2 = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {id: '1', source: Polll},
    {id: '2', source: MossHead},
    {id: '3', source: ShakerLogo},
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
        <Text>sdes poaufd sisfz sdfwsc</Text>
        <Text style={styles.title}>poaufd siasta sdfwsc sdes onbad dscff</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightView}>
        <ImageBackground source={item.source} style={styles.image}>
          <Image source={Whislist} style={{marginTop: hp(1)}} />
        </ImageBackground>
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
    height: hp(25),
    width: '100%',
    justifyContent: 'center'
  },
  slide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius : 10
  },
  leftView: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 7
  },
  rightView: {
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  image: {
    width: wp(30),
    height: hp(15),
    resizeMode: 'cover',
    borderRadius: wp(5),
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp(3.5), // Adjust font size based on screen size
    marginBottom: hp(1),
    marginTop : hp(1)
  },
  subtitle: {
    fontSize: wp(3.2), // Adjust font size based on screen size
    marginBottom: hp(0.5),
    marginLeft: wp(1),
  },
  price: {
    fontWeight: 'bold',
    fontSize: wp(3.5), // Adjust font size based on screen size
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
    marginTop: hp(0.4),
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

export default Courosal2;
