import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { s } from "./ButtonCatBeauf.style";

export function ButtonCatBeauf({ onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text_button}>Beauf</Text>
    </TouchableOpacity>
  );
}
