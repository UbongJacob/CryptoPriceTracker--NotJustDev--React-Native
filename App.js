import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";

import CoinItem from "./src/components/CoinItem";
import colors from "./src/styles/colors";
import cryptocurrencies from "./src/assets/data/cryptocurrencies.json";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />
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
