import { dataType } from "@/data/appData";
import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/*
This component will represent ONE row of our flatlist
We will send it an item, a boolean letting it know if 
it is selected, and a function letting it select 
itself
*/
// declare data type for props here
type propType ={
  item: dataType;
  isSelected: boolean,
  onPress: (item: dataType) => void;
}

const ListItem: React.FC<propType> = ({item, isSelected, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
                <View style = {[styles.flatListRow, 
                  {backgroundColor: isSelected ? 
                    colors.primary : colors.secondary
                  }
                  ]}>
                  <Text style={[styles.titleText, {color: isSelected ? 
                    colors.text.light : colors.text.dark
                  }]}>{item.title}</Text>
                </View>

              </TouchableOpacity>);
};

export default ListItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.secondary,
    padding: 5,
    height: 60,
    width: 350,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 5,
  },
  text: {
    color: colors.text.dark,
    fontSize: 20,
  },
  flatlist: {
    alignItems: "center",
  },
  flatListRow: {
    backgroundColor: 'green',
    width: 300,
    margin: 5,
    padding: 10,
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
