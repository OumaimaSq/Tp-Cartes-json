import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Text } from 'react-native';
import CardItem from './CardItem';
import cardsData from '../data/cards.json';

export function CardList() {
  const [search, setSearch] = useState('');

  // filtrer selon le texte recherché
  const filteredCards = cardsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <CardItem
      title={item.title}
      description={item.description}
      image={item.image}
      url={item.url}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Catalogue de Cartes</Text>

      <TextInput
        style={styles.input}
        placeholder="🔍 Rechercher un sujet..."
        value={search}
        onChangeText={setSearch}
      />

      {filteredCards.length === 0 ? (
        <Text style={styles.noResult}>Aucun résultat trouvé 😢</Text>
      ) : (
        <FlatList
          data={filteredCards}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f7fb' },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111F42',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  noResult: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
  },
});
