import { View, Text, StyleSheet } from "react-native";

export default function Falha() {
  return (
    <View>
      <Text style={styles.textFail}>Falhou!</Text>
    </View>
  );
}

const styles = StyleSheet.create({ textFail: { color: "red" } });
