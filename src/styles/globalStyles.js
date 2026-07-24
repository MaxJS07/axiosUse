import { StyleSheet, Platform, StatusBar  } from "react-native";

export const stylesButton = StyleSheet.create({
  button: {
    backgroundColor: "#FFCB05",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#3B4CCA",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export const stylesApp = StyleSheet.create({  
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 50,
    backgroundColor: "#791010",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 50,
  },
});

export const stylesWorkersScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#791010",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "semibold",
  },
});

export const stylesCard = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  work: {
    fontSize: 16,

    marginBottom: 5,
  },
  work_since: {
    fontSize: 14,
    color: "#666",
  },
});

export const stylesInput = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    marginLeft: 0,
    backgroundColor:"white"
  }
})