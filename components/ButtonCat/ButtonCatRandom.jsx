import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { s } from "./ButtonCatRandom.style";

export function ButtonCatRandom({ onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text_button}>Global</Text>
    </TouchableOpacity>
  );
}
