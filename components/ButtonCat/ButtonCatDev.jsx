import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { s } from "./ButtonCatDev.style";

export function ButtonCatDev({ onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text_button}>Dev</Text>
    </TouchableOpacity>
  );
}
