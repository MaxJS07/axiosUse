import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { stylesApp } from './src/styles/globalStyles';

//importamos el componente PokemonScreen que se encargará de mostrar la pantalla de los workers
import WorkersScreen from './src/screens/WorkersScreen';

export default function App() {
  return (
    <View style={stylesApp.container}>
      <Text style={stylesApp.title}>Mi aplicación consumiendo datos desde una API</Text>
      <WorkersScreen /> 
    </View> 
  );
}

