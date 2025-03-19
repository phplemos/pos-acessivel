import { SafeAreaView, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import BrandingComponent from "@/components/BrandingComponent";
import DescricaoComponent from "@/components/DescricaoComponent";
import ButtonComponent from "@/components/ButtonComponent";
import { router } from "expo-router";

export default function Etapa2() {
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
          titulo="Digito"
          tituloDestaque="3 de 4"
          descricao="Selecione o bloco que contém o 1º dígito da sua senha"
        />
        <ButtonComponent texto="Iniciar Pagamento" onPress={proximoDigito} />
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
