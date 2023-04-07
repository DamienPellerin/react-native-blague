import { Text, View } from "react-native";
import { s } from "./Randomjoke.style";

export function Randomjoke({ blague, currentCategory, setBlague, nextJoke }) {
  return (
    <View>
      <View style={s.container_joke}>
        <Text style={s.text_joke}>{currentCategory.toUpperCase()}</Text>
        <Text style={s.joke}>{blague}</Text>
      </View>
    </View>
  );
}
