
import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function AddPlayerModal({ visible, onClose, onConfirm }) {
  const [mode, setMode] = useState('buscar'); // 'buscar' o 'manual'
  const [selectedName, setSelectedName] = useState('');
  const [manualName, setManualName] = useState('');
  const [manualGender, setManualGender] = useState('Hombre');
  const [manualLevel, setManualLevel] = useState('');

  const handleConfirm = () => {
    if (mode === 'buscar' && selectedName) {
      onConfirm({ name: selectedName });
    } else if (mode === 'manual' && manualName && manualLevel) {
      onConfirm({ name: manualName, gender: manualGender, level: manualLevel });
    }
    // Reset
    setSelectedName('');
    setManualName('');
    setManualLevel('');
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.header}>Agregar Jugador</Text>
          <View style={styles.modeSwitch}>
            <Button title="Buscar" onPress={() => setMode('buscar')} />
            <Button title="Manual" onPress={() => setMode('manual')} />
          </View>

          {mode === 'buscar' ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Buscar jugador..."
                value={selectedName}
                onChangeText={setSelectedName}
              />
              <Text style={styles.suggestion}>Juan Pérez - 4.5</Text>
              <Text style={styles.suggestion}>María García - 3.5</Text>
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={manualName}
                onChangeText={setManualName}
              />
              <View style={styles.genderRow}>
                <TouchableOpacity onPress={() => setManualGender('Hombre')}>
                  <Text style={[styles.genderOption, manualGender === 'Hombre' && styles.selected]}>
                    Hombre
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setManualGender('Mujer')}>
                  <Text style={[styles.genderOption, manualGender === 'Mujer' && styles.selected]}>
                    Mujer
                  </Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Nivel (1-5)"
                keyboardType="numeric"
                value={manualLevel}
                onChangeText={setManualLevel}
              />
            </>
          )}

          <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirmar Jugador</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modeSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  suggestion: {
    backgroundColor: '#f2f2f2',
    padding: 6,
    borderRadius: 6,
    marginBottom: 4,
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  genderOption: {
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selected: {
    backgroundColor: '#007AFF',
    color: '#fff',
    borderColor: '#007AFF',
  },
  confirmBtn: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
    marginTop: 12,
  },
  confirmText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#007AFF',
  },
});
