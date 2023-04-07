import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { s } from "./App.style";
import { ButtonNext } from "./components/ButtonResponse/ButtonResponse";
import { Randomjoke } from "./components/Randomjoke/Randomjoke";
import { ResponseJoke } from "./components/ResponseJoke/ResponseJoke";
import { useState } from "react";
import { useEffect } from "react";
import { Text } from "react-native";
import BlaguesAPI from "blagues-api";
import { Header } from "./components/Header/Header";

export default function App() {
  const blagues = new BlaguesAPI(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTgxMTQ0OTI5MDU1MTY2NDc0IiwibGltaXQiOjEwMCwia2V5IjoiZ1hieGJEMDhuTnVkZW9pRGgxcG04UWZFclEyaDJ1ckRzRVM1TXc1Z1NqYmIwUkp1a0giLCJjcmVhdGVkX2F0IjoiMjAyMy0wNC0wNlQxMDo1NDoyMCswMDowMCIsImlhdCI6MTY4MDc3ODQ2MH0.eP6EUXwgw99diMO-9f_Pa0XQwNjhClB-Mh8EZEaIMIE"
  );

  const [blague, setBlague] = useState("undefined");
  const [reponse, setReponse] = useState("undefined");

  useEffect(() => {
    blagues
      .random({ disallow: [blagues.categories.DARK, blagues.categories.LIMIT] })
      .then((data) => {
        setBlague(data.joke);
        setReponse(data.answer);
        console.log("test");
      });
  }, []);

  function nextJoke() {
    blagues
      .random({ disallow: [blagues.categories.DARK, blagues.categories.LIMIT] })
      .then((data) => {
        setBlague(data.joke);
        setReponse(data.answer);
      });
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        <View style={s.btn_next}>
          <ButtonNext onPress={nextJoke} />
        </View>
        <View style={s.container}>
          <View style={s.container_joke_answer}>
            <Randomjoke blague={blague} setBlague={setBlague} />
            <ResponseJoke reponse={reponse} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
