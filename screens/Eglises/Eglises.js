import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

import React from 'react'

const Eglises = () => {
  return (
    <View style={styles.container}>
    {/* Header avec une image de fond */}
    <ImageBackground
      source={require('../assets/images/church_background.jpg')}
      style={styles.header}
      resizeMode="cover"
    >
      {/* Contenu du Header */}
      <Text style={styles.headerText}>
        Bienvenue à notre église !
        {"\n"}
        Visitez l'une de nos adresses ci-dessous :
      </Text>
      <Text style={styles.address}>
        123 Rue de l'Église, Ville
      </Text>
      <Text style={styles.address}>
        456 Avenue de la Foi, Ville
      </Text>
    </ImageBackground>

    {/* Section des Cartes (Cards) */}
    <View style={styles.cardsContainer}>
      {/* Première ligne de cartes */}
      <View style={styles.cardRow}>
        <ChurchCard title="Église A" image={require('../assets/images/church1.jpg')} />
        <ChurchCard title="Église B" image={require('../assets/images/church2.jpg')} />
      </View>

      {/* Deuxième ligne de cartes */}
      <View style={styles.cardRow}>
        <ChurchCard title="Église C" image={require('../assets/images/church3.jpg')} />
        <ChurchCard title="Église D" image={require('../assets/images/church4.jpg')} />
      </View>

      {/* Troisième ligne de cartes (et ainsi de suite jusqu'à la cinquième ligne) */}
      {/* ... */}
    </View>
  </View>
  )
}


const ChurchCard = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} resizeMode="cover" />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

export default Eglises

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  cardsContainer: {
    flex: 1,
    padding: 20,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%', // 48% pour laisser un petit espace entre les cartes
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});