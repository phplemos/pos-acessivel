import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import BrandingComponent from "@/components/BrandingComponent";
import DescricaoComponent from "@/components/DescricaoComponent";
import DigitoComponent from "@/components/DigitoComponent";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";

type Blocos = {
  bloco1: number[];
  bloco2: number[];
};

export default function Etapa1() {
  const [numeros, setNumeros] = useState<Blocos | null>(null);

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (numeros == null) {
      const nums: Blocos = {
        bloco1: [getRandomInt(0, 9), getRandomInt(0, 9)],
        bloco2: [getRandomInt(0, 9), getRandomInt(0, 9)],
      };
      setNumeros(nums);
    }
  }, []);
  
  
  function proximoBloco() {
    
    setNumero1(numeros?.bloco1 != null ? numeros.bloco1[0].toString() : "X");
    setNumero2(numeros?.bloco1 != null ? numeros.bloco1[0].toString() : "X");
  }
  function proximoDigito() {}
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BrandingComponent />
        </View>
        <DescricaoComponent
          titulo="Digito"
          tituloDestaque="1 de 4"
          descricao="Selecione o bloco que contém o 1º dígito da sua senha"
        />
        <View style={styles.selectNumber}>
          <TouchableOpacity onPress={proximoBloco}>
            <AntDesign name="left" size={38} />
          </TouchableOpacity>
          <DigitoComponent
            numero1={numero1}
            numero2={numero2}
            bloco="1"
            onPress={() => proximoDigito()}
          />
          <TouchableOpacity onPress={proximoBloco}>
            <AntDesign name="right" size={38} />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Image source={require("@/assets/images/audio-wave.png")} />
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    alignItems: "center",
  },
  selectNumber: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  soundWave: {
    width: 50,
    height: 20,
  },
});
