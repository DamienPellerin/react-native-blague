import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import {
  ButtonResponse,
  ButtonClose,
  ButtonNext,
} from "../ButtonResponse/ButtonResponse";
import { s } from "./ResponseJoke.style";

export function ResponseJoke({ reponse, nextJoke }) {
  const [visible, setVisible] = useState(false);
  function Reponse() {
    setVisible(!visible);
  }

  useEffect(() => {
    setVisible(false);
  }, [reponse]);
  return (
    <View>
      {visible && (
        <View>
          <View style={s.container_answer}>
            <Text style={s.answer}>{reponse}</Text>
          </View>
          <View style={s.btn_response}>
            <ButtonClose onPress={Reponse} />
            <ButtonNext style={s.btn_next} onPress={nextJoke} />
          </View>
        </View>
      )}
      {!visible && (
        <View style={s.btn_response}>
          <ButtonResponse onPress={Reponse} />
          <ButtonNext style={s.btn_next} onPress={nextJoke} />
        </View>
      )}
    </View>
  );
}
