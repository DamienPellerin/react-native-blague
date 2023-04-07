import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { s } from "./App.style";
import { ButtonCatBlondes } from "./components/ButtonCat/ButtonCatBlondes";
import { ButtonCatBeauf } from "./components/ButtonCat/ButtonCatBeauf";
import { ButtonCatDev } from "./components/ButtonCat/ButtonCatDev";
import { ButtonCatRandom } from "./components/ButtonCat/ButtonCatRandom";
import { Randomjoke } from "./components/Randomjoke/Randomjoke";
import { ResponseJoke } from "./components/ResponseJoke/ResponseJoke";
import { useState } from "react";
import { useEffect } from "react";
import BlaguesAPI from "blagues-api";
import { Header } from "./components/Header/Header";

export default function App() {
  const blagues = new BlaguesAPI(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTgxMTQ0OTI5MDU1MTY2NDc0IiwibGltaXQiOjEwMCwia2V5IjoiZ1hieGJEMDhuTnVkZW9pRGgxcG04UWZFclEyaDJ1ckRzRVM1TXc1Z1NqYmIwUkp1a0giLCJjcmVhdGVkX2F0IjoiMjAyMy0wNC0wNlQxMDo1NDoyMCswMDowMCIsImlhdCI6MTY4MDc3ODQ2MH0.eP6EUXwgw99diMO-9f_Pa0XQwNjhClB-Mh8EZEaIMIE"
  );

  const [blague, setBlague] = useState("Undefined");
  const [reponse, setReponse] = useState("undefined");
  const [currentCategory, setCurrentCategory] = useState(
    blagues.categories.GLOBAL
  );

  useEffect(() => {
    setCurrentCategory(blagues.categories.GLOBAL);
    blagues
      .random({ disallow: [blagues.categories.DARK, blagues.categories.LIMIT] })
      .then((data) => {
        setBlague(data.joke);
        setReponse(data.answer);
      });
  }, []);

  function nextJoke() {
    blagues.randomCategorized(currentCategory).then((data) => {
      setBlague(data.joke);
      setReponse(data.answer);
    });
  }

  function catBlondes() {
    setCurrentCategory(blagues.categories.BLONDES);
    blagues.randomCategorized(blagues.categories.BLONDES).then((data) => {
      setBlague(data.joke);
      setReponse(data.answer);
    });
  }

  function catBeauf() {
    setCurrentCategory(blagues.categories.BEAUF);
    blagues.randomCategorized(blagues.categories.BEAUF).then((data) => {
      setBlague(data.joke);
      setReponse(data.answer);
    });
  }

  function catDev() {
    setCurrentCategory(blagues.categories.DEV);
    blagues.randomCategorized(blagues.categories.DEV).then((data) => {
      setBlague(data.joke);
      setReponse(data.answer);
    });
  }

  function catRandom() {
    setCurrentCategory(blagues.categories.GLOBAL);
    blagues.randomCategorized(blagues.categories.GLOBAL).then((data) => {
      setBlague(data.joke);
      setReponse(data.answer);
    });
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: "#040404ff" }}>
      <SafeAreaView>
        <Header />
        <View style={s.next}>
          <ButtonCatRandom onPress={catRandom} />
          <ButtonCatBlondes onPress={catBlondes} />
          <ButtonCatBeauf onPress={catBeauf} />
          <ButtonCatDev onPress={catDev} />
        </View>
        <View style={s.container_joke_answer}>
          <Randomjoke
            blague={blague}
            setBlague={setBlague}
            currentCategory={currentCategory}
            nextJoke={nextJoke}
          />
          <ResponseJoke reponse={reponse} nextJoke={nextJoke} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
