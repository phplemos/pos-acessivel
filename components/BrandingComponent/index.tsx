import { View, Image, StyleSheet } from "react-native";

export default function BrandingComponent() {
  return (
    <View style={styles.logo}>
      <Image source={require("@/assets/images/ingenico-logo.png")}></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    backgroundColor: "#18191A",
    width: "80%",
    height: 90,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});
