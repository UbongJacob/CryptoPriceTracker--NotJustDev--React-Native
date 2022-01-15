import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../styles/colors";
import styles from "./styles";

const CoinItem = ({ marketCoin }) => {
  const {
    current_price,
    image,
    market_cap,
    market_cap_rank,
    name,
    price_change_percentage_24h,
    symbol,
  } = marketCoin;

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1000000000000) {
      return `${Math.floor(marketCap / 1000000000000)} T`;
    }
    if (marketCap >= 1000000000) {
      return `${Math.floor(marketCap / 1000000000)} B`;
    }
    if (marketCap >= 1000000000) {
      return `${Math.floor(marketCap / 1000000)} M`;
    }
    if (marketCap >= 1000000000) {
      return `${Math.floor(marketCap / 1000)} K`;
    }

    return marketCap;
  };

  const percentageColor =
    price_change_percentage_24h < 0 ? colors.red : colors.green;

  return (
    <View style={styles.coinContianer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          alignSelf: "center",
          height: 30,
          marginRight: 10,
          width: 30,
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.subTextsContainer}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={percentageColor}
            style={styles.icon}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={styles.McapTextContainer}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{ color: "white" }}>
          Mcap {formatMarketCap(market_cap)}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;
