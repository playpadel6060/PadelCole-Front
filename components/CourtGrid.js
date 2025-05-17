
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CourtGrid({ players, onSlotPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Jugadores</Text>
      <View style={styles.grid}>
        {players.map((p, idx) => (
          <TouchableOpacity key={idx} style={styles.slot} onPress={() => onSlotPress(idx)}>
            <Text style={styles.playerText}>
              {p?.name ? p.name : '+'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  slot: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#e0f7e9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  playerText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
