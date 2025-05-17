
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import PublishScreen from '../screens/PublishScreen';
import MyMatchesScreen from '../screens/MyMatchesScreen';
import RankingScreen from '../screens/RankingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlayerProfileScreen from '../screens/PlayerProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Partidos':
              iconName = 'tennisball-outline';
              break;
            case 'Publicar':
              iconName = 'add-circle-outline';
              break;
            case 'Mis Partidos':
              iconName = 'list-outline';
              break;
            case 'Ranking':
              iconName = 'podium-outline';
              break;
            case 'Perfil':
              iconName = 'person-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Quiero jugar" component={HomeScreen} />
      <Tab.Screen name="Me falta alguien" component={PublishScreen} />
      <Tab.Screen name="Mis Partidos" component={MyMatchesScreen} />
      <Tab.Screen name="Ranking" component={RankingScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Jugador" component={PlayerProfileScreen} />
    </Tab.Navigator>
  );
}
