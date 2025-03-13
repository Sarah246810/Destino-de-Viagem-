// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View,Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const registrar = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      Alert.alert('Usuário registrado com sucesso!', `Email: ${user.email}`);
    } catch (error) {
      Alert.alert('Erro ao registrar usuário', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro</Text>
      </View>
      <View style={styles.containerForm}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={() => registrar("Login")}>
          <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77767c',
  },
  containerHeader: {
    marginTop: '20%',
    marginBottom: '19%',
    paddingStart: '5%',
},
message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#140f07',
    marginTop: 10,
},
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    marginTop: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
},
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
},
button: {
  backgroundColor: '#141a35',
  width: '100%',
  borderRadius: 4,
  paddingVertical: 8,
  marginTop: 14,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
},
});

export default Cadastro;
