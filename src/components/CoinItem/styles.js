import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const styles = StyleSheet.create({
  coinContianer: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    padding: 15,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: 50,
  },
  icon: {
    alignSelf: "center",
    marginRight: 5,
  },
  McapTextContainer: {
    marginLeft: "auto",
  },
  rank: {
    color: "white",
    fontWeight: "bold",
  },
  rankContainer: {
    backgroundColor: colors.grey,
    borderRadius: 5,
    marginRight: 5,
    paddingHorizontal: 5,
  },
  subTextsContainer: {
    flexDirection: "row",
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
});

export default styles;
