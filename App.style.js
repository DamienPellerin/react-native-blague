import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container_joke_answer: {
    backgroundColor: "#040404e3",
  },
  next: {
    flexDirection: "row",
    backgroundColor: "#040404da",
  },

  btn_next: {
    backgroundColor: "#040404c0",
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
