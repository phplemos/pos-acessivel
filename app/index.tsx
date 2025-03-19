import { SafeAreaView, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import BrandingComponent from "@/components/BrandingComponent";
import DescricaoComponent from "@/components/DescricaoComponent";
import ButtonComponent from "@/components/ButtonComponent";
import { router } from "expo-router";
import * as Speech from "expo-speech";
import { useEffect } from "react";

export default function Home() {
  const iniciarPagamento = () => {
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
