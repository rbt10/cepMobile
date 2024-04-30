import React from 'react';
import { View, Text, homeStyleheet,Image, ScrollView,  TouchableOpacity, Linking} from 'react-native';
import Swiper from 'react-native-swiper';
import Image1 from '../../assets/images/ann.jpeg';
import Image2 from '../../assets/images/mag.jpeg';
import Image3 from '../../assets/images/sis.jpg';
import Image4 from '../../assets/images/mard.jpeg';
import Image5 from '../../assets/images/ven.jpeg';
import Image6 from '../../assets/images/dim.jpeg';
import Image7 from '../../assets/images/formations.png';
import Image8 from '../../assets/images/dons.png';
import Image9 from '../../assets/images/pilier.png';
import homeStyle from './style';

const HomeScreen = () => {
  const handleImagePress = () => {
    const donationUrl = 'https://cep-resurrection.org/faire-un-don/';

    // Ouvrir l'URL dans le navigateur externe
    Linking.openURL(donationUrl);
  };
    return (
        <ScrollView>
          <View style={homeStyle.header}>
         
            <Swiper style={homeStyle.sliderContainer} autoplay={true} autoplayTimeout={3}>
              <View >
                <Image source={Image1} style={homeStyle.homeImg} />
              </View>
              <View >
                <Image source={Image2} style={homeStyle.homeImg} />
              </View>
            
              <View >
                <Image source={Image3} style={homeStyle.homeImg} />
              </View>
            </Swiper>
          </View>
          <Text style={homeStyle.prog}>Nos Programes</Text>
          <View style={homeStyle.imageContainer}>
            <Image source={Image4} style={homeStyle.horaireImg} />
            <Image source={Image5} style={homeStyle.horaireImg} />
            <Image source={Image6} style={homeStyle.horaireImg} />
          </View>
          <View >
            <Image source={Image7} style={homeStyle.formation} />
          </View>
          <View >
      {/* Afficher l'image dans TouchableOpacity pour rendre l'image cliquable */}
            <TouchableOpacity onPress={handleImagePress}>
              <Image source={Image8} style={homeStyle.formation} />
            </TouchableOpacity>
          </View>
          <View >
            <Image source={Image9} style={homeStyle.formation} />
          </View>
        
        </ScrollView>
        
      );
    };
    
  
export default HomeScreen;
