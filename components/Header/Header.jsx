import { View, Image } from "react-native";
import logo from "../../assets/dad-jokes.png";

import { s } from "./Header.style";

export function Header() {
  return (
    <View>
      <Image style={s.image} source={logo} />
    </View>
  );
}
