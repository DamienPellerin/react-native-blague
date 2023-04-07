import { View, Image } from "react-native";
import logo from "../../assets/dad-jokes.png";

import { s } from "./Header.style";

export function Header() {
  return (
    <View style={s.container_header}>
      <Image style={s.image} source={logo} />
    </View>
  );
}
