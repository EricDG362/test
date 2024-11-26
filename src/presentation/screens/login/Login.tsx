import React from 'react'

import {Text, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView,
    ImageBackground, StyleSheet, Platform,Keyboard
} from 'react-native'




const Login = () => {


        

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={estilo.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ImageBackground
          source={require('../../../asset/img/ab.jpg')}
          style={estilo.background}
          resizeMode="cover"
        >
         
          <TextInput
            style={estilo.input}
            placeholder="INGRESE USUARIO"
            placeholderTextColor={'#000'}
            keyboardType="default"
          />

<TextInput
            style={[estilo.input,estilo.inputUlti]}
            placeholder="CONTRASEÑA"
            placeholderTextColor={'#000'}
            keyboardType="default"
          />

          <Text>Si no posees una cuenta. CREAR CUENTA</Text>

        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
const estilo = StyleSheet.create({
    container: {
      flex: 1, // Mantén el 100% de la pantalla
      
    },
    background: {
      flex: 1, // Hace que la imagen de fondo ocupe todo el espacio disponible
      justifyContent: 'flex-end', // Alinea el contenido verticalmente
      alignItems: 'center', // Alinea el contenido horizontalmente
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 15,
      width: '80%',
      height: 50,
      paddingLeft: 10,
      marginBottom:20
    },
    inputUlti:{
        marginBottom:150
    }
  });


export default Login