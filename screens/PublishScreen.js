
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import CourtGrid from '../components/CourtGrid';
import AddPlayerModal from '../components/AddPlayerModal';

export default function PublishScreen() {
  const [formVisible, setFormVisible] = useState(false);
  const [players, setPlayers] = useState([null, null, null, null]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [iAmPlaying, setIAmPlaying] = useState(false);

   const [lugar, setLugar] = useState('');
   const [genero, setGenero] = useState('');
   const [fecha, setFecha] = useState('');
   const [hora, setHora] = useState('');
   const [duracion, setDuracion] = useState('');
   const [jugadores, setJugadores] = useState('');

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
    }
  ];

  const handleSlotPress = (index) => {
    setSelectedSlot(index);
    setModalVisible(true);
  };

  const handleAddPlayer = (player) => {
    const updated = [...players];
    updated[selectedSlot] = player;
    setPlayers(updated);
  };

  const handleSwitchToggle = (value) => {
    setIAmPlaying(value);
    if (value) {
      const updated = [...players];
      const emptyIndex = updated.findIndex(p => p === null);
      if (emptyIndex !== -1) {
        updated[emptyIndex] = { name: 'Yo' };
        setPlayers(updated);
      }
    } else {
      const updated = players.map(p => (p?.name === 'Yo' ? null : p));
      setPlayers(updated);
    }
  };

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
                    <View style={styles.btnRow}>
                      <TouchableOpacity style={styles.acceptBtn}><Text style={styles.btnText}>Aceptar</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.rejectBtn}><Text style={styles.btnText}>Rechazar</Text></TouchableOpacity>
                    </View>
                  </View>
                ))
              )}
            </View>
          ))}
        </>
      ) : (
        <View>
          <TouchableOpacity onPress={() => setFormVisible(false)}>
            <Text style={styles.backBtn}>← Volver</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Crear Partido</Text>
          <TextInput style={styles.input} placeholder="Lugar" />
          <TextInput style={styles.input} placeholder="Tipo de Partido (Mixto/Hombres/Mujeres)" />
          <TextInput style={styles.input} placeholder="Fecha (dd/mm/aaaa)" />
          <TextInput style={styles.input} placeholder="Hora (HH:mm)" />
          <TextInput style={styles.input} placeholder="Duración (minutos)" />
          <TextInput style={styles.input} placeholder="Desvío de nivel permitido (±1)" />
          <CourtGrid players={players} onSlotPress={handleSlotPress} />
          <View style={styles.checkboxRow}>
            <Text>¿Vas a participar?</Text>
            <Switch value={iAmPlaying} onValueChange={handleSwitchToggle} />
          </View>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={styles.confirmText}>Crear partido</Text>
          </TouchableOpacity>
        </View>
      )}
      <AddPlayerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleAddPlayer}
      />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
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
  backBtn: {
    color: '#007AFF',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardText: {
    color: '#444',
    marginBottom: 4,
  },
  postulacion: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    marginTop: 6,
  },
  postulante: {
    fontWeight: 'bold',
  },
  message: {
    fontStyle: 'italic',
  },
  phone: {
    color: '#007AFF',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 6,
  },
  acceptBtn: {
    backgroundColor: '#00C851',
    padding: 6,
    borderRadius: 6,
  },
  rejectBtn: {
    backgroundColor: '#ff4444',
    padding: 6,
    borderRadius: 6,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  confirmBtn: {
    backgroundColor: '#00A86B',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  confirmText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
