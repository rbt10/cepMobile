import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Home/HomeScreen';
import Enseignements from '../Enseignements/Enseignements';
import EgliseScreen from '../Eglises/EgliseScreen';
import FormationsScreen from '../Formations/FormationsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Accueil') {
            iconName = 'home';
          }  else if (route.name === 'Eglises') {
            iconName = 'list';
          } else if (route.name === 'Enseignement') {
            iconName = 'book';
          } else if (route.name === 'Formations') {
            iconName = 'school';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white' },
        tabBarLabelStyle: { fontSize: 14 }, // Style des libellés des onglets
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen}   options={{ headerShown: false }}/>
      <Tab.Screen name="Eglises" component={EgliseScreen} />
      <Tab.Screen name="Enseignement" component={Enseignements} />
      <Tab.Screen name="Formations" component={FormationsScreen}  />
    </Tab.Navigator>
  );
};

const DonationScreen = ({ navigation }) => {
  // Fonction pour naviguer vers l'écran des dons au clic sur l'icône "Dons"
  const handleDonationPress = () => {
    navigation.navigate('Dons'); // Redirection vers l'écran des dons
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={handleDonationPress}>
        <Ionicons name="cash" size={24} color="purple" />
        <Text style={styles.screenText}>Faire un don</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabs;

const styles = {
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
};
