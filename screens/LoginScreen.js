import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    // TODO: Implement actual login authentication
    console.log('Logging in with:', { email, password });
    // On successful login, you might want to:
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>PLAYER LOGIN</Text>
        <Text style={styles.subtitle}>Enter Your Credentials</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#4DFFF3"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#4DFFF3"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>[ ENTER GAME ]</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>NEW PLAYER? REGISTER HERE</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Recovery')}>
          <Text style={styles.link}>LOST ACCESS?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    position: 'relative',
  },
  formContainer: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#151515',
    shadowColor: '#00FFF7',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 8,
    textAlign: 'center',
    color: '#00FFF7',
    textShadowColor: '#00FFF7',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#4DFFF3',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1,
    opacity: 0.8,
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#00FFF7',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    color: '#00FFF7',
    shadowColor: '#00FFF7',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    backgroundColor: '#1A1A1A',
    padding: 18,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#00FFF7',
    shadowColor: '#00FFF7',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#00FFF7',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
    textShadowColor: '#00FFF7',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  link: {
    color: '#4DFFF3',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
    letterSpacing: 1,
    opacity: 0.8,
  },
}); 