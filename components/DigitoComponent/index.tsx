import { speak } from "expo-speech";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export type BlocoDeValores = {
  numeroBloco: number;
  valores: {
    valor1: string;
    valor2: string;
  };
};

export type DigitoProps = {
  bloco: BlocoDeValores;
  onPress: VoidFunction;
};

export function DigitoComponent(props: DigitoProps) {
  

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.buttonTextHeader}>
        Bloco {props.bloco.numeroBloco}
      </Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.bloco.valores.valor1}</Text>
        <Text style={styles.buttonText}>{props.bloco.valores.valor2}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#18191A", // Background color of the screen
    padding: 20,
    borderRadius: 15,
    width: "50%",
  },
  button: {
    flexDirection: "column",
    backgroundColor: "#00bfff", // Blue background color of the button
    gap: 10,
    width: "98%",
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "regular",
    color: "#fff", // White text color
  },
  buttonTextHeader: {
    fontSize: 18,
    fontWeight: "regular",
    color: "#fff", // White text color
  },
});
