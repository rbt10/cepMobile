import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChurchDepartmentsTable from './screens/Departements/ChurchDepartmentsTable'
import FormationDetailScreen from './screens/Formations/FormationDetailScreen'
import VisionScreen from './screens/Vision/VisionScreen';
import DonationScreen from './screens/Donations/DonationScreen';

import BottomTabs from './screens/tabs';


const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Accueil'>
       <Stack.Screen
          name="home"
          component={BottomTabs}
          options={{ headerShown: false }} // Masquer l'en-tête si nécessaire
        />
        <Stack.Screen
          name="Departements"
          component={ChurchDepartmentsTable}
         // Masquer l'en-tête si nécessaire
        />
         <Stack.Screen
          name="DetailFormation"
          component={FormationDetailScreen}
          // Masquer l'en-tête si nécessaire
        />
         <Stack.Screen
          name="Vision"
          component={VisionScreen}
       
        />
         <Stack.Screen
          name="Dons"
          component={DonationScreen}
       
        />
    </Stack.Navigator>
        
   
      
    </NavigationContainer>
  );
};

export default AppNavigation;
