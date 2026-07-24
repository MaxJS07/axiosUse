import React from "react";
import { View, FlatList, Text } from "react-native";
//importamos el componente CustomCard que se encargará de mostrar la información de cada empleado
import CustomCard from "../components/CustomCard";
import CustomDBCard from "../components/CustomDBCard";
//importamos el hook useCustomData que se encargará de obtener la información de los empleados desde la API
import useDBData from "../hooks/useDBData";
import { stylesWorkersScreen } from "../styles/globalStyles";
import CustomInput from "../components/CustomInput";

const DragonBallScreen = () => {
  //utilizamos el hook useCustomData para obtener la información de los empleados y el estado de loading
  const { dbData, searchTermDb, setSearchTermDb } = useDBData();

  return (
    <View style={stylesWorkersScreen.container}>
      <Text style={stylesWorkersScreen.title}>Lista de empleados</Text>

      <Text style={stylesWorkersScreen.description}>
        En esta pantalla estamos mostrando la lista de empleados utilizando el
        componente FlatList de RReact Native. Cada empleado se representa
        mediante un CustomCard que muestra su nombre, trabajo y fecha de inicio.
      </Text>

      <CustomInput onChange={setSearchTermDb} value={searchTermDb}/>

      <FlatList
        data={dbData}
        renderItem={({ item }) => <CustomDBCard character={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default DragonBallScreen;

