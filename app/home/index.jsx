import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Card style={{ width: '100%', maxWidth: 400, marginBottom: 16 }}>
      </Card>
      <Button mode="contained" onPress={() => { /* handle upload */ }} style={{ marginBottom: 16 }}>
        Upload Resume
      </Button>
      <Button mode="contained" onPress={() => { /* handle start interview */ }}>
      <Link href="questions">Start Interview</Link>
      </Button>
    </View>
  );
}

