
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function PublishScreen() {
  const [formVisible, setFormVisible] = useState(false);

  const mockCreatedMatches = [
    {
      id: 1,
      club: 'Urban Padel Club',
      date: 'Lunes, 14 de abril',
      hour: '18:00h',
      postulaciones: [
        { name: 'Juan Pérez', message: 'Juego bien en drive, tengo experiencia.', phone: '+54 9 11 5555-1234' },
        { name: 'Lucía Torres', message: '¿Hay lugar aún?', phone: null },
      ],
    },
    {
      id: 2,
      club: 'San Isidro Padel Club',
      date: 'Miércoles, 16 de abril',
      hour: '19:30h',
      postulaciones: [],
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!formVisible ? (
        <>
          <Text style={styles.title}>Me Falta Alguien</Text>
          <Text style={styles.subtitle}>Crea un partido y encontrá el jugador que te falta</Text>
          <TouchableOpacity style={styles.createBtn} onPress={() => setFormVisible(true)}>
            <Text style={styles.createBtnText}>+ Crear nuevo partido</Text>
          </TouchableOpacity>

          <Text style={styles.subtitle}>Tus partidos incompletos:</Text>
          {mockCreatedMatches.map(match => (
            <View key={match.id} style={styles.card}>
              <Text style={styles.cardTitle}>{match.club}</Text>
              <Text style={styles.cardText}>📅 {match.date} - 🕒 {match.hour}</Text>
              <Text style={styles.cardText}>Postulaciones:</Text>
              {match.postulaciones.length === 0 ? (
                <Text style={styles.cardText}>No hay postulaciones aún.</Text>
              ) : (
                match.postulaciones.map((p, idx) => (
                  <View key={idx} style={styles.postulacion}>
                    <Text style={styles.postulante}>{p.name}</Text>
                    <Text style={styles.message}>"{p.message}"</Text>
                    {p.phone && <Text style={styles.phone}>📞 {p.phone}</Text>}
                  </View>
                ))
              )}
            </View>
          ))}
        </>
      ) : (
        <Text style={styles.title}>[Formulario activo – ya implementado en otra vista]</Text>
      )}
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
  subtitle: {
    marginBottom: 8,
  },
  createBtn: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  createBtnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  cardText: {
    marginBottom: 4,
    color: '#444',
  },
  postulacion: {
    backgroundColor: '#f4f4f4',
    padding: 8,
    borderRadius: 6,
    marginTop: 6,
  },
  postulante: {
    fontWeight: 'bold',
  },
  message: {
    fontStyle: 'italic',
    marginVertical: 2,
  },
  phone: {
    color: '#007AFF',
  },
});
