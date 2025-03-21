import { SafeAreaView, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import BrandingComponent from "@/components/BrandingComponent";
import DescricaoComponent from "@/components/DescricaoComponent";
import ButtonComponent from "@/components/ButtonComponent";
import { router } from "expo-router";
import { useContext, useEffect } from "react";
import { PasswordContext } from "@/contexts/senhaContext";
import { getRandomInt } from "@/utils/randomInteger";

export default function Home() {
  const context = useContext(PasswordContext);

  const iniciarPagamento = () => {
    context.randomNumber1 = getRandomInt(0, 9).toString();
    context.randomNumber2 = getRandomInt(0, 9).toString();
    context.randomNumber3 = getRandomInt(0, 9).toString();
    while (
      context.randomNumber1 == context.digito1 ||
      context.randomNumber2 == context.digito1 ||
      context.randomNumber3 == context.digito1
    ) {
      if (context.randomNumber1 == context.digito1) {
        context.randomNumber1 = getRandomInt(0, 9).toString();
      }
      if (context.randomNumber2 == context.digito1) {
        context.randomNumber2 = getRandomInt(0, 9).toString();
      }
      if (context.randomNumber3 == context.digito1) {
        context.randomNumber3 = getRandomInt(0, 9).toString();
      }
      if (context.randomNumber2 == context.randomNumber3) {
        context.randomNumber3 = getRandomInt(0, 9).toString();
      }
    }
    router.navigate("/etapa1");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BrandingComponent />
        </View>
        <DescricaoComponent
          titulo="Ingenico"
          tituloDestaque="Talk"
          descricao="Aplicativo de pagamento "
        />
        <ButtonComponent texto="Iniciar Pagamento" onPress={iniciarPagamento} />
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
