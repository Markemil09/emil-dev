import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { HapticTab } from '@/components/haptic-tab';
import { portfolioColors } from '@/components/portfolio';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: portfolioColors.primaryStrong,
        tabBarInactiveTintColor: portfolioColors.textDim,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          display: 'none',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          letterSpacing: 0.4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="home-filled" color={color} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          href: null,
          title: 'Projects',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="work-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          href: null,
          title: 'Experience',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="timeline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stack"
        options={{
          href: null,
          title: 'Stack',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="terminal" color={color} />,
        }}
      />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
