import axios from "axios";
import BlaguesAPI from "blagues-api";
import { Text, View, Image, TouchableOpacity } from "react-native";
import fleche from "../../assets/fleche-droite.png";
import { useEffect, useState } from "react";
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
