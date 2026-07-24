//Custom card para mostrar la información

//los imports que traen los componentes nativos de react native
import { StyleSheet, Text, View } from "react-native";
import { stylesCard } from "../styles/globalStyles";

/**https://retoolapi.dev/GH2Ivb/dataMovil
 * 
 * 
 * "id": 1,
    "name": "Katerine Schirak",
    "work": "Building Materials",
    "work_since": "Apr 6, 2026 6:19 PM"
 */

//recibimos worker como props, el cual será el objeto que contiene la información del empleado que queremos mostrar en la tarjeta

const CustomDBCard = ({ character }) => {
  return (
    <View style={stylesCard.card}>
      <Text style={stylesCard.name}>{character.name}</Text>
      <Text style={stylesCard.work}>{character.description}</Text>
      <Text style={stylesCard.work_since}>Ki: {character.ki}</Text>
    </View>
  );
};

export default CustomDBCard;

