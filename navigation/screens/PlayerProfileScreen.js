
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PlayerProfileScreen() {
  // Datos de ejemplo
  const player = {
    name: 'Miguel Álvarez',
    level: 'Avanzado',
    hand: 'Drive',
    gender: 'Hombre',
    bio: 'Jugador apasionado de pádel. Siempre listo para un partido competitivo.',
    stats: {
      played: 42,
      wins: 28,
      losses: 14,
    },
  };

  const winRate = Math.round((player.stats.wins / player.stats.played) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{player.name.split(' ').map(n => n[0]).join('')}</Text>
      </View>
      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.meta}>{player.level} • {player.hand} • {player.gender}</Text>
      <Text style={styles.bio}>{player.bio}</Text>

      <View style={styles.statsBox}>
        <Text style={styles.statsHeader}>Estadísticas</Text>
        <Text>Partidos jugados: {player.stats.played}</Text>
        <Text>Victorias: {player.stats.wins}</Text>
        <Text>Derrotas: {player.stats.losses}</Text>
        <Text>Win Ratio: {winRate}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  avatar: {
    backgroundColor: '#00AEEF',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  meta: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 12,
  },
  bio: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  statsBox: {
    backgroundColor: '#f6f6f6',
    padding: 16,
    borderRadius: 12,
  },
  statsHeader: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
});
