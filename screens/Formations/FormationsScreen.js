import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // Importez l'icône de la bibliothèque FontAwesome

import FormationItem from '../../components/FormationItem';
import formationData from '../../api/formationData';

const FormationsScreen = () => {
  const navigation = useNavigation();

  const handleFormationPress = (formation) => {
    navigation.navigate('DetailFormation', { formation });
  };

  const renderFormationItem = ({ item }) => (
    <TouchableOpacity style={styles.formationItem} onPress={() => handleFormationPress(item)}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={item.image}
          style={styles.image}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.imageTitle}>{item.title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* En-tête avec bouton de retour */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <ImageBackground
          source={require('../../assets/images/formations.png')}
          style={styles.headerBackground}
          imageStyle={{ resizeMode: 'cover' }}
        >
          {/* Contenu en-tête si nécessaire */}
        </ImageBackground>
      </View>

      {/* Liste des formations */}
      <ScrollView>
        <FlatList
          data={formationData}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderFormationItem}
          contentContainerStyle={styles.formationsList}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#007bff', // Couleur d'arrière-plan de l'en-tête
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  headerBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formationsList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  formationItem: {
    flex: 1,
    margin: 8,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden', // Pour masquer le dépassement d'image
  },
  image: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent pour le titre
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
   
  },
});

export default FormationsScreen;
