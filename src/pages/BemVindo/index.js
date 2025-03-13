import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function BemVindo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <View style={styles.containerHeader}>
                    <Text style={styles.message}>Destino Certo</Text>
                </View>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo1.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>
                    Explore o mundo com facilidade: Seu próximo destino está apenas a um toque de distância com nosso app de roteiros de viagem!
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingRight: '35%',
    },
    message: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#141a35'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#77767c',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#140f07',
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#141a35',
        borderRadius: 50,
        paddingVertical: 8, 
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})