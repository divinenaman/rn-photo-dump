import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MaskedFlatList from './components/maskedFlatList';

const demoData = [...Array(30).keys()].map((_, i) => {
  return {
      key: i,
      image: `https://images.unsplash.com/photo-1579935110464-fcd041be62d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
      name: "Star Wars",
      desp: "A galaxy far, far away",
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
