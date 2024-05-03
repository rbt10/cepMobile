import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
      <ImageBackground
        source={require('../../assets/images/formations.png')}
        style={styles.headerBackground}
        imageStyle={{ resizeMode: 'cover' }}
      >
        {/* Contenu en-tête si nécessaire */}
      </ImageBackground>
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
  headerBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
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
    textAlign: 'center',
  },
});

export default FormationsScreen;
