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