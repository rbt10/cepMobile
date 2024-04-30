import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Importer les icônes Ionicons
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/Home/HomeScreen';
import Enseignements from './screens/Enseignements/Enseignements';

const Tab = createBottomTabNavigator();


function DonationsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Dons</Text>
    </View>
  );
}

function ProgramsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Programmes</Text>
    </View>
  );
}


// Navigation principale
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
       
            if (route.name === 'Accueil') {
              iconName = 'home';
            } else if (route.name === 'Dons') {
              iconName = 'cash';
            } else if (route.name === 'Eglises') {
              iconName = 'list';
            } else if (route.name === 'Enseignements') {
              iconName = 'home';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}
      >
       <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Dons" component={DonationsScreen} />
        <Tab.Screen name="Programmes" component={ProgramsScreen} />
        <Tab.Screen name="Enseignement" component={Enseignements} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
