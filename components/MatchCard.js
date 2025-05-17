
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MatchCard({
  clubName,
  location,
  date,
  time,
  duration,
  category,
  players,
  missingPlayers,
  level,
  hand,
  gender,
  status,
  applied,
  onApply,
  onPlayerPress
}) {
  const getStatusColor = () => {
    switch (status) {
      case 'confirmado':
        return '#d1f5d3';
      case 'esperando':
        return '#fff4cc';
      case 'rechazado':
        return '#ffd6d6';
      default:
        return '#eee';
    }
  };

  const renderStatusText = () => {
    switch (status) {
      case 'confirmado':
        return 'Partido confirmado';
      case 'esperando':
        return 'Esperando confirmación';
      case 'rechazado':
        return 'Rechazado';
      default:
        return '';
    }
  };

  return (
    <View style={styles.card}>
      <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
        <Text style={styles.statusText}>{renderStatusText()}</Text>
      </View>

      <Text style={styles.clubName}>{clubName}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.dateTime}>📅 {date} • 🕒 {time}</Text>
      <Text style={styles.details}>{duration} min • {category}</Text>

      <Text style={styles.subHeader}>Jugadores:</Text>
      <View style={styles.playersRow}>
        {players.map((p, idx) =>
          p ? (
            <TouchableOpacity key={idx} onPress={() => onPlayerPress(p)}>
              <View style={styles.player}>
                <Text>{p}</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View key={idx} style={styles.player}>
              <Text>Falta</Text>
            </View>
          )
        )}
      </View>

      <Text style={styles.missing}>Faltan {missingPlayers} jugador{missingPlayers > 1 ? 'es' : ''}</Text>

      <View style={styles.tags}>
        <Text style={styles.tag}>{level}</Text>
        <Text style={styles.tag}>{hand}</Text>
        <Text style={styles.tag}>{gender}</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, applied && styles.buttonDisabled]}
        disabled={applied}
        onPress={onApply}
      >
        <Text style={styles.buttonText}>{applied ? 'Postulación enviada' : 'Postularme'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  statusBadge: {
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  clubName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    color: '#666',
    marginBottom: 4,
  },
  dateTime: {
    color: '#333',
  },
  details: {
    color: '#555',
    marginBottom: 8,
  },
  subHeader: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  playersRow: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 6,
  },
  player: {
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  missing: {
    color: '#888',
  },
  tags: {
    flexDirection: 'row',
    marginTop: 8,
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    marginRight: 8,
  },
  button: {
    backgroundColor: '#00AEEF',
    marginTop: 12,
    padding: 10,
    borderRadius: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
