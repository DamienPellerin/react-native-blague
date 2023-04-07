import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container_joke: {
    color: "black",
    height: 180,
    textAlign: "center",
    backgroundColor: "#f5c150fc",
    borderRadius: 20,
    justifyContent: "center",
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  joke: {
    fontSize: 20,
  },

  text_joke: {
    paddingBottom: 20,
  },

  btn_next: {
    position: "absolute",
    top: 20,
    right: 15,
    width: 28,
    height: 28,
    borderRadius: 20,
    alignItems: "center",
  },
});

export { s };
