import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function CardItem({ title, description, image, url }) {
  const [favorite, setFavorite] = useState(false);

  const handleOpenLink = async () => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
            <Text style={styles.btnText}>🔗 Voir plus</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, favorite && styles.favorite]}
            onPress={() => setFavorite(!favorite)}
          >
            <Text style={styles.btnText}>{favorite ? '❤️ Favori' : '🤍 Aimer'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  cover: { width: '100%', height: 160 },
  body: { padding: 14 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 6, color: '#2a4e8d' },
  desc: { color: '#555', marginBottom: 10 },
  actions: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    backgroundColor: '#2a4e8d',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  favorite: {
    backgroundColor: '#d62828',
  },
  btnText: { color: '#fff', fontWeight: '600' },
});
