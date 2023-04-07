import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  app: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0404047d",
  },
  next: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0404047d",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container_joke_answer: {
    flex: 10,
    backgroundColor: "#0404047d",
    paddingTop: 20,
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
