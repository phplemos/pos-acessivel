import { speak } from "expo-speech";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

type DescricaoProps = {
  titulo: string;
  descricao: string;
  tituloDestaque: string;
};

export default function DescricaoComponent(props: DescricaoProps) {
  useEffect(() => {
      speak(
        `Titulo: ${props.titulo} ${props.tituloDestaque}, Descricao: ${props.descricao}`,
        { language: "pt-br" }
      );
    }, []);
  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        {props.titulo}{" "}
        <Text style={styles.blueText}>{props.tituloDestaque}</Text>
      </Text>
      <Text style={styles.subtitle}>{props.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#18191A",
  },
  blueText: {
    color: "#007bff",
  },
  subtitle: {
    fontSize: 16,
    color: "#18191A",
    marginBottom: 20,
  },
});
