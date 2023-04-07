import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { s } from "./ButtonResponse.style";

export function ButtonResponse({ onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text_button}>Réponse</Text>
    </TouchableOpacity>
  );
}

export function ButtonClose({ onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text_button}>Fermer</Text>
    </TouchableOpacity>
  );
}

export function ButtonNext({ onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text_button}>Suivant</Text>
    </TouchableOpacity>
  );
}
