import React, { useState } from 'react';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';


function Auth() {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { colors } = useTheme();

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

 
  const handleSignUp = () => {
    console.log('Sign Up:', { username, password, email });
  };

  const handleSignIn = () => {
    console.log('Sign In:', { username, password });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: colors.primary }]}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </Text>
      {isSignUp && (
        <TextInput
        style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={isSignUp ? handleSignUp : handleSignIn}
        style={styles.button}
      >
        {isSignUp ? 'Sign Up' : <Link href="home">SignIn</Link>}
      </Button>

      <Button
        mode="text"
        onPress={toggleAuthMode}
        style={styles.button}
      >
        {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default Auth;
