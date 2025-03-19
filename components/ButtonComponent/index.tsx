import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

type ButtonProps = {
  texto: string;
  onPress: VoidFunction;
};

export default function ButtonComponent(props: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>Iniciar pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#19B6DD",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
