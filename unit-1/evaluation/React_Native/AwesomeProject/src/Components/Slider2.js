import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MossHead, Polll } from '../Assests/Utils/images';

const Courosal = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  const images = [
    { id: '1', source: MossHead },
    { id: '2', source: Polll },
    { id: '3', source: MossHead },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <View style={styles.leftView}>
        <Text style={styles.title}>MossHead Cucumber Lime Mojito Shaker</Text>
        <Text style={styles.subtitle}>24 * Can 473 ml</Text>
        <Text style={styles.price}>$69 <Text style={styles.discount}>$48</Text></Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightView}>
        <Image source={item.source} style={styles.image} />
      </View>
    </View>
  );

  useEffect(() => {
    const handleScreenRotation = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', handleScreenRotation);

    return () => {
      Dimensions.removeEventListener('change', handleScreenRotation);
    };
  }, []);

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

const { width } = Dimensions.get('window');
const slideWidth = width;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
    height: hp(20),
    width : "90%",
    justifyContent : "center"
  },
  slide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,  
  },
  leftView: {
    width: '40%',
    alignItems: 'left',
    justifyContent: 'center',
  },
  rightView: {
    width: '40%',
    alignItems: 'left',
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
    fontSize: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 8,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  discount: {
    color: 'red',
  },
  button: {
    backgroundColor: 'orange',
    width: '60%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Courosal;
