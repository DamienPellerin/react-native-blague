import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { s } from "./ButtonCatBlondes.style";

export function ButtonCatBlondes({ onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text_button}>Blondes</Text>
    </TouchableOpacity>
  );
}
