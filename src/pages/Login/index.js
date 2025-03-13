import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; 

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const registrar = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then(() => {
                navigation.navigate("Roteiro");
            })
            .catch(error => {
                if (error.code === "auth/user-not-found") {
                    Alert.alert("Erro", "Por favor, cadastre-se.Falha ao fazer login. Preencha os campos..");
                } else {
                    Alert.alert("Erro", "E-mail não encontrado.");
                }
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.message}>Seja Bem-Vindo(a)</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu e-mail..."
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={text => setSenha(text)}
                />

                <TouchableOpacity style={styles.button} onPress={() => registrar("Roteiro")}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
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
    title: {
        fontSize: 20,
        marginTop: 28,
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
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#696969',
    }
});
