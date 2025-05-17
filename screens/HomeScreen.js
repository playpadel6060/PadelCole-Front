
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MatchCard from '../components/MatchCard';
import MatchFilter from '../components/MatchFilter';
import PostulateModal from '../components/PostulateModal';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [filters, setFilters] = useState({
    zone: '',
    level: '',
    gender: '',
  });

  const mockMatches = [
    {
      clubName: 'Urban Padel Club',
      location: 'Buenos Aires, Palermo',
      zone: 'Palermo',
      date: 'Lunes, 14 de abril',
      time: '18:00h',
      duration: 90,
      category: 'Mixto',
      gender: 'Mixto',
      players: ['Miguel A', 'Javier R', 'María G', null],
      missingPlayers: 1,
      level: 'Avanzado',
      hand: 'Drive',
      status: 'confirmado',
      applied: false,
    },
    {
      clubName: 'Club de Padel Belgrano',
      location: 'Buenos Aires, Belgrano',
      zone: 'Belgrano',
      date: 'Martes, 15 de abril',
      time: '20:00h',
      duration: 60,
      category: 'Hombres',
      gender: 'Hombre',
      players: ['Carlos M', 'Roberto L', null, null],
      missingPlayers: 2,
      level: 'Principiante',
      hand: 'Revés',
      status: 'esperando',
      applied: true,
    }
  ];

  const filteredMatches = mockMatches.filter(match =>
    (!filters.zone || match.zone === filters.zone) &&
    (!filters.level || match.level === filters.level) &&
    (!filters.gender || match.gender === filters.gender)
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MatchFilter filters={filters} setFilters={setFilters} />
      {filteredMatches.map((match, index) => (
        <MatchCard
          key={index}
          {...match}
          onApply={() => setModalVisible(true)}
          onPlayerPress={(player) => navigation.navigate('Jugador')}
        />
      ))}
    
      <PostulateModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={(data) => {
          console.log('Postulación enviada:', data);
          setModalVisible(false);
        }}
      />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
