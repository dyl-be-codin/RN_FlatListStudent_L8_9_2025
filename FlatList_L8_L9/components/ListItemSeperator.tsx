import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

type propType = {
  color?: string;
}
const ListItemSeparator: React.FC<propType> = ({color}) => {
  return <View 
    style={[styles.separator, {backgroundColor: color || colors.theme.light.text}]}
  />;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: '100%',
  },
});
