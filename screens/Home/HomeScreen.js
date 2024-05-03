import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import homeStyle from './style';
import { useNavigation } from '@react-navigation/native';
import Image1 from '../../assets/images/ann.jpeg';
import Image2 from '../../assets/images/mag.jpeg';
import Image3 from '../../assets/images/sis.jpg';
import Image4 from '../../assets/images/mard.jpeg';
import Image5 from '../../assets/images/ven.jpeg';
import Image6 from '../../assets/images/dim.jpeg';
import Image7 from '../../assets/images/formations.png';
import Image8 from '../../assets/images/dons.png';
import Image9 from '../../assets/images/pilier.png';
import dept from '../../assets/images/dept.png';
import shop from '../../assets/images/boutique.png';
import vision from '../../assets/images/vision.png';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleFormationPress = () => {
    navigation.navigate('Formations'); // Naviguer vers l'écran des formations
  };

  const handleDptPress = () => {
    navigation.navigate('ChurchDepartments'); // Naviguer vers l'écran des départements
  };

  const handleImagePress = () => {
    const donationUrl = 'https://cep-resurrection.org/faire-un-don/';
    Linking.openURL(donationUrl); // Ouvrir l'URL dans le navigateur externe
  };
  const handleShopPress = () => {
    const shopUrl = 'https://cep-resurrection.org/boutique/';
    Linking.openURL(shopUrl); // Ouvrir l'URL dans le navigateur externe
  };

  return (
    <ScrollView>
      <View style={homeStyle.header}>
        <Swiper style={homeStyle.sliderContainer} autoplay={true} autoplayTimeout={3}>
          <View>
            <Image source={Image1} style={homeStyle.homeImg} />
          </View>
          <View>
            <Image source={Image2} style={homeStyle.homeImg} />
          </View>
          <View>
            <Image source={Image3} style={homeStyle.homeImg} />
          </View>
        </Swiper>
      </View>
      <Text style={homeStyle.prog}>Nos Programmes</Text>
      <View style={homeStyle.imageContainer}>
        <Image source={Image4} style={homeStyle.horaireImg} />
        <Image source={Image5} style={homeStyle.horaireImg} />
        <Image source={Image6} style={homeStyle.horaireImg} />
      </View>
      <TouchableOpacity onPress={handleFormationPress}>
        <Image source={Image7} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={Image8} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShopPress}>
        <Image source={vision} style={homeStyle.formation} />
      </TouchableOpacity>
      <Image source={Image9} style={homeStyle.formation} />
      <TouchableOpacity onPress={handleDptPress}>
        <Image source={dept} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShopPress}>
        <Image source={shop} style={homeStyle.formation} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;
