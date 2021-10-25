import React from "react";
import { View, Text, FlatList, Animated, Image } from "react-native";

const IMAGE_HEIGHT = 200;
const IMAGE_WIDTH = 200;

export default function MaskedFlatList({ data }) {
  return (
    <View style={{ height: "50%" }}>
      <FlatList
        horizontal={true}
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={listItem}
        contentContainerStyle={{
          padding: 10,
          paddingLeft: 20,
        }}
      />
    </View>
  );
}

function listItem({ item }) {
  return (
    <View style={{ backgroundColor: "teal", marginRight: 20 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
      />
      <Text>{item.name}</Text>
      <Text>{item.desp}</Text>
    </View>
  );
}
