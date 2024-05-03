import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChurchDepartmentsTable from './screens/Departements/ChurchDepartmentsTable'
import FormationDetailScreen from './screens/Formations/FormationDetailScreen'

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
          name="ChurchDepartments"
          component={ChurchDepartmentsTable}
          options={{ headerShown: false }} // Masquer l'en-tête si nécessaire
        />
         <Stack.Screen
          name="DetailFormation"
          component={FormationDetailScreen}
          options={{ headerShown: false }} // Masquer l'en-tête si nécessaire
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default AppNavigation;
