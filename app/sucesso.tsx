import { View, Text, StyleSheet } from "react-native";

export default function Sucesso() {
  return (
    <View>
      <Text style={styles.textSuccess}>Sucesso!</Text>
    </View>
  );
}

const styles = StyleSheet.create({ textSuccess: { color: "green" } });
