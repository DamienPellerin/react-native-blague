import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#040404e3",
    justifyContent: "center",
  },
  container_joke_answer: {
    height: 800,
    bottom: 150,
  },
  btn_next: {
    backgroundColor: "#040404e3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

export { s };
