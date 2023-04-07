import axios from "axios";
import BlaguesAPI from "blagues-api";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { s } from "./Randomjoke.style";

export function Randomjoke({ blague, setBlague }) {
  return (
    <View>
      <View style={s.container_joke}>
        <Text style={s.joke}>{blague}</Text>
      </View>
    </View>
  );
}
