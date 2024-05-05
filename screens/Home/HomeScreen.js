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
import dept from '../../assets/images/dept.png';
import shop from '../../assets/images/boutique.png';
import vision from '../../assets/images/vision.png';
import logo from '../../assets/images/logo.png'; // Importez votre logo ici

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleFormationPress = () => {
    navigation.navigate('Formations'); // Naviguer vers l'écran des formations
  };

  const handleDptPress = () => {
    navigation.navigate('Departements'); // Naviguer vers l'écran des départements
  };

  const handleVisionPress = () => {
    navigation.navigate('Vision'); // Naviguer vers l'écran de la vision
  };

  const handleDonPress = () => {
    navigation.navigate('Dons'); // Naviguer vers l'écran des dons
  };

  const handleShopPress = () => {
    const shopUrl = 'https://cep-resurrection.org/boutique/';
    Linking.openURL(shopUrl); // Ouvrir l'URL dans le navigateur externe
  };

  return (

    <View  style={homeStyle.container}>
       <Image source={logo} style={homeStyle.logo} />
       <ScrollView>
      {/* En-tête avec le logo */}
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

      {/* Contenu restant de la page */}
      <Text style={homeStyle.prog}>Nos Programmes</Text>
      <View style={homeStyle.imageContainer}>
        <Image source={Image4} style={homeStyle.horaireImg} />
        <Image source={Image5} style={homeStyle.horaireImg} />
        <Image source={Image6} style={homeStyle.horaireImg} />
      </View>
      <TouchableOpacity onPress={handleFormationPress}>
        <Image source={Image7} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDonPress}>
        <Image source={Image8} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleVisionPress}>
        <Image source={vision} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDptPress}>
        <Image source={dept} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShopPress}>
        <Image source={shop} style={homeStyle.formation} />
      </TouchableOpacity>
    </ScrollView>
    </View>
    
  );
};

export default HomeScreen;
