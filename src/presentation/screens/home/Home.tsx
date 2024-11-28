import React from 'react'
import { SafeAreaView, Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'


const Home = () => {





  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={estilo.container}>



        <Text style={estilo.titulo}>Hola Erisssssc...</Text>

        <Pressable style={estilo.btnCrear}>
          <Text style={estilo.textbtn}>CREAR ARCHIVO</Text>
        </Pressable>

        <Pressable style={estilo.btnBuscar}>
          <Text style={estilo.textbtn}>BUSCAR</Text>
        </Pressable>




      </SafeAreaView>
    </TouchableWithoutFeedback>

  )
}

const estilo = StyleSheet.create({

  container: {
    backgroundColor: '#DA70D6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  titulo: {
    color: '#000',
    marginBottom: 50,
  },
  btnCrear: {
    width: '40%',
    backgroundColor: 'cyan',
    borderRadius: 20,
    marginBottom: 30,
    paddingVertical: 15,

  },
  btnBuscar: {
    width: '40%',
    backgroundColor: 'green',
    borderRadius: 20,
    paddingVertical: 15,

  },
  textbtn: {
    textAlign: 'center'

  },



})

export default Home