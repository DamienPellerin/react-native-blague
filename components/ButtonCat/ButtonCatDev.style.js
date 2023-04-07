import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  button: {
    height: 30,
    width: 70,
    justifyContent: "center",
    backgroundColor: "#f5c150fc",
    borderRadius: 20,
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
  text_button: {
    color: "#0b0909fd",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export { s };
