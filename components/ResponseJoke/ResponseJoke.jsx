import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import {
  ButtonResponse,
  ButtonClose,
  ButtonNext,
} from "../ButtonResponse/ButtonResponse";
import { s } from "./ResponseJoke.style";

export function ResponseJoke({ reponse }) {
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
          <View>
            <ButtonClose onPress={Reponse} />
          </View>
        </View>
      )}
      {!visible && (
        <View>
          <ButtonResponse onPress={Reponse} />
        </View>
      )}
    </View>
  );
}
