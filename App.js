import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { CardList } from './components/CardList';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f7fb" />
      <CardList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f6f7fb' },
});
