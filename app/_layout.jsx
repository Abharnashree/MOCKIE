// app/_layout.jsx
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
      </Stack>
    </PaperProvider>
  );
}
