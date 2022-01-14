import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import CoinItem from "./src/components/CoinItem";
import colors from "./src/styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CoinItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: 50,
  },
});
