import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MaskedFlatList from './components/maskedFlatList';

const demoData = [...Array(30).keys()].map((_, i) => {
  return {
      key: i,
      image: `https://randomuser.me/api/portraits/men/75.jpg`,
      name: "Joker",
      desp: "Classic Triller",
  };
});

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <MaskedFlatList data={demoData} />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
