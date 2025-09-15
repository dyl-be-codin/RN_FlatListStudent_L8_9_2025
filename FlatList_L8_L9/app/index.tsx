import ListItem from "@/components/ListItem";
import ListItemSeparator from "@/components/ListItemSeperator";
import { DATA, dataType } from "@/data/appData";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";
export default function Index() {
  
  const [selectedId, setSelectedId] = 
    useState<string>("1");

    // call this when they click on an item
  const selectedList = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id);
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA} 
            keyExtractor={(item: dataType) => item.id}
            extraData={selectedId}
            ItemSeparatorComponent={ () => (
              <ListItemSeparator color="blue"/>)}
            renderItem={({ item }) => (
              <ListItem 
                item = {item}
                isSelected = {item.id === selectedId}
                onPress={selectedList}
              />
            )
          }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  
});
