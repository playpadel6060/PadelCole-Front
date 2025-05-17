
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import PublishScreen from '../screens/PublishScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Quiero jugar':
              iconName = 'tennisball-outline';
              break;
            case 'Me falta alguien':
              iconName = 'add-circle-outline';
              break;
            case 'Mi perfil':
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
      <Tab.Screen name="Mi perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
