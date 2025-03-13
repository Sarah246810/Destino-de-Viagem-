import { useState } from 'react'
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Platform, Pressable, ScrollView, ActivityIndicator, Alert, Keyboard} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const StatusBarHeight = StatusBar.courrentHeight

import { API_URL } from '@env';

console.log(API_URL);

export default function App() {

  const [cidade, setCidade] = useState("");
  const [dias, setDias] = useState (1);
  const [carregando, setCarregando] = useState(false); 
  const [viagem, setViagem] = useState("")

  async function gerar(){
    if(cidade === ""){
      Alert.alert("Preencher Campo Vazio")
      return;
    }

    setViagem("")
    setCarregando(true);
    Keyboard.dismiss();

    const prompt = `Crie um roteiro para uma viagem de exatos ${dias.toFixed(0)} dias na cidade de ${cidade}, busque por lugares turisticos, lugares mais visitados, seja preciso nos dias de estadia fornecidos e limite o roteiro apenas na cidade fornecida. Forneça apenas em tópicos com nome do local onde ir em cada dia.`

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${KEY_GPT}`
      },
      body: JSON.stringify({
        model:"gpt-3.5-turbo",
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.20,
        max_tokens: 500,
        top_p: 1,
      })
    })
    .then(resposta => resposta.json())
    .then((data) => {
      console.log(data.choices[0].message.content);
      setViagem(data.choices[0].message.content);
    })
    .catch((erro) => {
      console.log(erro);
    })
    .finally(() => {
      setCarregando(false);
    })
  }
  return (
    <View style={estilo.container}>
      <StatusBar style="dark-content" translucent={true} backgroundColor='#77767c'/>
      <Text style={estilo.heading}>Destino Certo</Text>

      <View style={estilo.form}>
        <Text style={estilo.label}>Cidade Desejada</Text>
        <TextInput
           placeholder='Ex: Gramado-RS'
           style={estilo.input}
           value={cidade}   
           onChangeText={ (text) => setCidade(text)}
        />

        <Text style={estilo.label}>Período de Reserva: <Text style={estilo.dias}> {dias.toFixed(0)} </Text> Dias </Text>
        <Slider
        minimumValue={1}
        maximumValue={30}
        minimumTrackTintColor='#009688'
        maximumTrackTintColor='#000000'
        value={dias}
        onValueChange={ (value) => setDias(value)}
        />
      </View>
      <Pressable style={estilo.button} onPress={gerar}>
        <Text style={estilo.buttonText}>Montar Cronograma</Text>
        <MaterialIcons name="travel-explore" size={24} color="#FFF"/>
      </Pressable>
      <ScrollView style={estilo.containerScroll} showsVerticalScrollIndicator={false}>
        {carregando &&(
          <View style={estilo.content}>
            <Text style={estilo.title}>Carregando</Text>
            <ActivityIndicator color="#000" size="large"/>
          </View>
        )}

        {viagem && (
          <View style={estilo.content}>
            <Text style={estilo.title}>Guia de Viagem</Text>
            <Text>{viagem}</Text>
          </View>
        )}
      </ScrollView>


    </View>

  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 100,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: 60,
    color: '#140f07',
    paddingTop: Platform.OS === 'android' ? StatusBarHeight : 54
  },
  form:{
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  label:{
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 12,
    color: '#140f07'
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#94a3b8',
    padding: 6,
    fontSize: 17,
    marginBottom: 20,
  },
  dias: {
    backgroundColor: '#F1F1F1',
  },
  button:{
    backgroundColor: '#141a35',
    width: '90%',
    borderRadius: 6,
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#FFF',
    padding: 20,
    width: '100%',
    marginTop: 10,
  },
  title:{
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  containerScroll: {
    width: '90%',
    marginTop: 10,
    font: 20,
  }
});