import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <View>
      <Text>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
      {isSignUp && (
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      )}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isSignUp ? 'Sign Up' : 'Sign In'}
        onPress={() => {
          console.log(username);
          console.log(password);
          {isSignUp && (console.log(email))}
        }}
      />
      <Button
        title={isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
        onPress={toggleAuthMode}
      />
    </View>
  );
}

export default Auth;
