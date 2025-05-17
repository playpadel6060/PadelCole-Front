import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import CourtGrid from '../components/CourtGrid';
import AddPlayerModal from '../components/AddPlayerModal';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('historial');
  const [players, setPlayers] = useState([null, null, null, null]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [result, setResult] = useState('');

  const mockHistory = [
    { id: 1, club: 'Urban Padel Club', date: '05/05/2024', score: '6-3 / 4-6 / 10-8' },
    { id: 2, club: 'Club Belgrano',    date: '28/04/2024', score: '6-2 / 6-2' },
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

  const handleSaveResult = () => {
    console.log('Resultado cargado:', { players, result });
    // Aquí llamarías a tu API para guardar
    // Luego resetea form:
    setPlayers([null, null, null, null]);
    setResult('');
  };

  return (
    <View style={styles.container}>
      {/* Barra de tabs */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'historial' && styles.activeTab]}
          onPress={() => setActiveTab('historial')}
        >
          <Text style={activeTab === 'historial' ? styles.activeText : styles.inactiveText}>
            Historial
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'cargar' && styles.activeTab]}
          onPress={() => setActiveTab('cargar')}
        >
          <Text style={activeTab === 'cargar' ? styles.activeText : styles.inactiveText}>
            Cargar resultado
          </Text>
        </TouchableOpacity>
      </View>

      {/* Contenido de cada tab */}
      {activeTab === 'historial' ? (
        <ScrollView contentContainerStyle={styles.content}>
          {mockHistory.map((match) => (
            <View key={match.id} style={styles.card}>
              <Text style={styles.cardTitle}>{match.club}</Text>
              <Text style={styles.cardText}>📅 {match.date}</Text>
              <Text style={styles.cardText}>🎾 {match.score}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.sectionTitle}>Seleccioná 4 jugadores</Text>
          <CourtGrid players={players} onSlotPress={handleSlotPress} />

          <Text style={styles.sectionTitle}>Resultado</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 6-3 / 4-6 / 10-8"
            value={result}
            onChangeText={setResult}
          />

          <TouchableOpacity style={styles.saveBtn} onPress={handleSaveResult}>
            <Text style={styles.saveText}>Guardar Resultado</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* Modal para buscar o agregar jugador */}
      <AddPlayerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleAddPlayer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  tabBar: { flexDirection: 'row', backgroundColor: '#f2f2f2' },
  tab: { flex: 1, padding: 12, alignItems: 'center' },
  activeTab: { borderBottomWidth: 3, borderBottomColor: '#007AFF', backgroundColor: '#fff' },
  activeText: { color: '#007AFF', fontWeight: 'bold' },
  inactiveText: { color: '#666' },
  content: { padding: 16 },
  card: {
    backgroundColor: '#fff', padding: 12, borderRadius: 8,
    marginBottom: 12, elevation: 1,
  },
  cardTitle: { fontWeight: 'bold', fontSize: 16 },
  cardText: { color: '#555', marginTop: 4 },
  sectionTitle: { fontWeight: 'bold', marginBottom: 8, fontSize: 16 },
  input: {
    borderWidth: 1, borderColor: '#ccc',
    borderRadius: 8, padding: 8, marginBottom: 12,
  },
  saveBtn: {
    backgroundColor: '#00A86B', padding: 12,
    borderRadius: 8, alignItems: 'center',
  },
  saveText: { color: 'white', fontWeight: 'bold' },
});
  