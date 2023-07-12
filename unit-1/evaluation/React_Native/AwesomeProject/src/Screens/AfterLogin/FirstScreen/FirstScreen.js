import React, {useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Bottle1,
  Bottle2,
  BrandLogo,
  OrderImage,
  SastiBottle,
  passImage,
} from '../../../Assests/Utils/images';
import Courosal from '../../../Components/Slider';
import Courosal3 from '../../../Components/Slider3';
import Courosal2 from '../../../Components/Slider2';
import {styles} from './styles';

const FirstScreen = ({navigation}) => {
  return (
    <View style={styles.BigBox}>
      <ScrollView style={styles.Scroll} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.HeaderBox}>
          <View style={styles.DrawerJi}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={styles.DrawerButton}>=</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image source={BrandLogo} />
          </View>
          <View style={styles.Order}>
            <TouchableOpacity>
              <Image source={OrderImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Search}>
          <Image source={passImage} style={styles.SearchImage} />
          <TextInput
            style={styles.SearchText}
            placeholder="Search 100+ brands of beer..."
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.SecondBigBox}>
          <View>
            <Courosal />
          </View>
          <View style={styles.What}>
            <Text style={styles.WhatText}>See What's On Sale</Text>
            <TouchableOpacity style={styles.WhatButton}>
              <Text style={styles.WhatButtonText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Courosal2 />
          </View>
          <View style={styles.Start}>
            <View style={{flexDirection: 'row'}}>
              <Image source={SastiBottle} />
              <Text style={styles.StartText}>Start An Order</Text>
            </View>
            <TouchableOpacity style={styles.StartButton}>
              <Text style={{fontWeight: 'bold'}}>ORDER NOW</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.StartButtonText}>
            <Text style={styles.New}>What's New</Text>
            <TouchableOpacity style={styles.NewBox}>
              <Text style={styles.NewBoxText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Courosal3}>
            <Courosal3 />
          </View>
          <View style={styles.BewarBox}>
            <Text style={styles.BeerText}>Bear Categories</Text>
          </View>
          <View style={styles.BearBox}>
            <View style={styles.BeerBox1}>
              <Image source={Bottle1} style={styles.BeerBox1Image} />
              <Text style={styles.BeerBox1ImageText}>Domestic</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                padding: wp(5),
                alignItems: 'center',
                borderColor: 'gray',
              }}>
              <Image source={Bottle2} style={styles.BeerBox2ImageJi} />
              <Text style={styles.BeerBox1ImageText}>Import</Text>
            </View>
            <View style={styles.BeerBox2Image}>
              <Image source={Bottle1} style={styles.BeerBox1Image} />
              <Text style={styles.BeerBox1ImageText}>Ontario</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FirstScreen;
