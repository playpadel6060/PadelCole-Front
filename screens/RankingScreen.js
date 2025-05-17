
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RankingScreen() {
  const navigation = useNavigation();

  const mockPlayers = [
    { name: 'Miguel Álvarez', level: 5, played: 40, wins: 32 },
    { name: 'Lucía Torres', level: 4, played: 30, wins: 20 },
    { name: 'Carlos Martínez', level: 3, played: 25, wins: 10 },
    { name: 'Roberto López', level: 4, played: 50, wins: 30 },
    { name: 'Sofía Romero', level: 5, played: 35, wins: 25 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ranking</Text>
      {mockPlayers.map((player, index) => {
        const winRate = Math.round((player.wins / player.played) * 100);
        return (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('Jugador')}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {player.name.split(' ').map(n => n[0]).join('')}
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>#{index + 1} {player.name}</Text>
              <Text style={styles.meta}>Nivel {player.level} • {player.played} jugados • {winRate}% victorias</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  avatar: {
    backgroundColor: '#007AFF',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  meta: {
    color: '#666',
    marginTop: 2,
  },
});
