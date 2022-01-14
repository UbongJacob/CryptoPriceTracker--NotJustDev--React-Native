import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const CoinItem = () => {
  return (
    <View style={styles.coinContianer}>
      <Image
        source={{
          uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        }}
        style={{
          alignSelf: "center",
          height: 30,
          marginRight: 10,
          width: 30,
        }}
      />
      <View>
        <Text style={styles.title}>Bitcoin </Text>
        <View style={styles.subTextsContainer}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>1</Text>
          </View>
          <Text style={styles.text}>BTC</Text>
          <AntDesign
            name="caretdown"
            size={12}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.text}>0,63%</Text>
        </View>
      </View>
      <View style={styles.McapTextContainer}>
        <Text style={styles.title}>5625.09</Text>
        <Text style={styles.text}>Mcap 1.076T</Text>
      </View>
    </View>
  );
};

export default CoinItem;
