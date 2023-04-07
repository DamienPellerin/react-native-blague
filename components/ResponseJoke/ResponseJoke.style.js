import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container_answer: {
    color: "black",
    height: 150,
    textAlign: "center",
    backgroundColor: "#f5c150fc",
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
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

  answer: {
    fontSize: 20,
  },
  btn_response: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export { s };
