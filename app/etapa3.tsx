import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import BrandingComponent from "@/components/BrandingComponent";
import DescricaoComponent from "@/components/DescricaoComponent";
import { BlocoDeValores, DigitoComponent } from "@/components/DigitoComponent";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext, useEffect, useState } from "react";
import { getRandomInt } from "@/utils/randomInteger";
import { PasswordContext } from "@/contexts/senhaContext";
import { router } from "expo-router";
import { speak } from "expo-speech";

export default function Etapa3() {
  const context = useContext(PasswordContext);

  useEffect(() => {
    context.randomNumber1 = getRandomInt(0, 9).toString();
    context.randomNumber2 = getRandomInt(0, 9).toString();
    if (
      context.digito3 == context.randomNumber1 ||
      context.digito3 == context.randomNumber2
    ) {
      context.randomNumber1 = getRandomInt(0, 9).toString();
      context.randomNumber2 = getRandomInt(0, 9).toString();
    }
  }, []);

  const [blocoAtual, setBlocoAtual] = useState<BlocoDeValores>({
    numeroBloco: 1,
    valores: {
      valor1: context.digito3,
      valor2: context.randomNumber1,
    },
  });

  function proximoBloco() {
    const blocos = [
      {
        numeroBloco: 1,
        valores: {
          valor1: context.randomNumber1,
          valor2: context.digito3,
        },
      },
      {
        numeroBloco: 2,
        valores: {
          valor1: context.digito3,
          valor2: context.randomNumber2,
        },
      },
    ];
    if (blocoAtual.numeroBloco != 1) {
      setBlocoAtual(blocos[0]);
    } else {
      setBlocoAtual(blocos[1]);
    }
  }
  useEffect(() => {
      speak(
        `Bloco ${blocoAtual.numeroBloco}, Numero: ${blocoAtual.valores.valor1} ou ${blocoAtual.valores.valor2}`,
        { language: "pt-br" }
      );
    }, [blocoAtual]);

  function proximoDigito() {
    router.navigate("/etapa4");
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BrandingComponent />
        </View>
        <DescricaoComponent
          titulo="Dígito"
          tituloDestaque="3 de 4"
          descricao="Selecione o bloco que contém o 1º dígito da sua senha"
        />
        <View style={styles.selectNumber}>
          <TouchableOpacity onPress={proximoBloco}>
            <AntDesign name="left" size={38} />
          </TouchableOpacity>
          <DigitoComponent bloco={blocoAtual} onPress={() => proximoDigito()} />
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
  },
  soundWave: {
    width: 50,
    height: 20,
  },
});
