import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function PlayerProfileScreen() {
  // Datos mock (luego vendrán de tu API)
  const player = {
    name: 'Miguel Álvarez',
    level: 5,
    ranking: 1200,
    stats: { played: 42, wins: 28, losses: 14 },
    history: [
      {
        id: 1,
        club: 'Urban Padel Club',
        date: '05/05/2024',
        score: '6-3 / 4-6 / 10-8',
        players: ['Miguel Á', 'Javier R', 'María G', 'Carlos M'],
      },
      {
        id: 2,
        club: 'Club Belgrano',
        date: '28/04/2024',
        score: '6-2 / 6-2',
        players: ['Miguel Á', 'Roberto L', 'Lucía T', 'Sofía R'],
      },
    ],
  };

  const winRate = Math.round((player.stats.wins / player.stats.played) * 100);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {player.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </Text>
        </View>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.meta}>Nivel {player.level} • {player.ranking} pts</Text>
        <Text style={styles.meta}>{player.stats.played} jugados • {winRate}% victorias</Text>
      </View>

      {/* Historial */}
      <Text style={styles.sectionTitle}>Historial de partidos</Text>
      {player.history.map((match) => (
        <View key={match.id} style={styles.card}>
          <Text style={styles.cardTitle}>{match.club} • {match.date}</Text>
          <Text style={styles.cardScore}>{match.score}</Text>
          <View style={styles.playersRow}>
            {match.players.map((p, idx) => (
              <Text key={idx} style={styles.playerName}>{p}</Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    backgroundColor: '#007AFF',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  meta: {
    color: '#666',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardScore: {
    marginVertical: 6,
  },
  playersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  playerName: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 4,
  },
});

