import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import MaskedView  from "@react-native-community/masked-view";

const IMAGE_HEIGHT = "60%";
const IMAGE_WIDTH = 200;
const { width } = Dimensions.get("window");

export default function Backdrop({ data, animatedScrollXValue }) {
    return (
        <View
          style={{
            position: "absolute",
            width,
            height: "100%"
          }}
        >
          <FlatList
            horizontal={true}
            keyExtractor={(item) => item.key}
            data={data}
            snapToInterval={IMAGE_WIDTH + 20 + 20}
            decelerationRate={0}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
                return (
                    <MaskedView>
                        <Image source={{ uri: item.image }} style={{
                            width,
                            height: "100%",
                            resizeMode: "cover"
                        }}/>
                    </MaskedView>
                )
            }}
          />
        </View>
      );    
}

export default function MaskedFlatList({ data }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Backdrop animatedScrollXValue={scrollX} data={data} />  
      <Animated.FlatList
        horizontal={true}
        keyExtractor={(item) => item.key}
        data={[{ key: "space-left" }, ...data, { key: "space-right" }]}
        snapToInterval={IMAGE_WIDTH + 20 + 20}
        decelerationRate={0}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => (
          <ListItem animatedScrollXValue={scrollX} item={item} idx={index} />
        )}
        contentContainerStyle={{
          alignItems: "center",
        }}
      />
    </View>
  );
}

function ListItem({ item, idx, animatedScrollXValue }) {
  const SIZE = IMAGE_WIDTH + 2 * 20 + 2 * 10;
  const inputRange = [(idx - 2) * SIZE, (idx - 1) * SIZE, idx * SIZE];
  const outputRange = [0, -50, 0];
  const translateY = animatedScrollXValue.interpolate({
    inputRange,
    outputRange,
  });

  if (item.key == "space-left" || item.key == "space-right") {
    const SPACER_SIZE = (width - SIZE) / 2;

    return <View style={{ width: SPACER_SIZE }}></View>;
  }

  return (
    <Animated.View
      style={{
        backgroundColor: "teal",
        marginRight: 20,
        borderRadius: 16,
        padding: 10,
        transform: [{ translateY }],
      }}
    >
      <Animated.Image
        source={{ uri: item.image }}
        style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
      />
      <Animated.Text>{item.name}</Animated.Text>
      <Animated.Text>{item.desp}</Animated.Text>
    </Animated.View>
  );
}
