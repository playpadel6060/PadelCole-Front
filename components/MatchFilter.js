
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function MatchFilter({ filters, setFilters }) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={filters.zone}
        onValueChange={(value) => setFilters({ ...filters, zone: value })}
        style={styles.picker}
      >
        <Picker.Item label="Zona" value="" />
        <Picker.Item label="Palermo" value="Palermo" />
        <Picker.Item label="Belgrano" value="Belgrano" />
      </Picker>

      <Picker
        selectedValue={filters.level}
        onValueChange={(value) => setFilters({ ...filters, level: value })}
        style={styles.picker}
      >
        <Picker.Item label="Nivel" value="" />
        <Picker.Item label="Principiante" value="Principiante" />
        <Picker.Item label="Intermedio" value="Intermedio" />
        <Picker.Item label="Avanzado" value="Avanzado" />
      </Picker>

      <Picker
        selectedValue={filters.gender}
        onValueChange={(value) => setFilters({ ...filters, gender: value })}
        style={styles.picker}
      >
        <Picker.Item label="Género" value="" />
        <Picker.Item label="Hombre" value="Hombre" />
        <Picker.Item label="Mujer" value="Mujer" />
        <Picker.Item label="Mixto" value="Mixto" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  picker: {
    flex: 1,
    minWidth: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
});
