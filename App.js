import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { stylesApp } from './src/styles/globalStyles';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DragonBallScreen from './src/screens/DragonBallScreen';

//importamos el componente PokemonScreen que se encargará de mostrar la pantalla de los workers
import WorkersScreen from './src/screens/WorkersScreen';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Workers" component={WorkersScreen}/>
        <Stack.Screen name="Dragon Ball" component={DragonBallScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

