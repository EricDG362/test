import React from 'react';
import { Text, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, 
    ImageBackground, StyleSheet, Platform, Keyboard, Pressable, View, modal, 
    Modal} from 'react-native';

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
            style={[estilo.input, estilo.inputPrime]}
            placeholder="INGRESAR USUARIO"
            placeholderTextColor={'#000'}
            keyboardType="default"
          />

          <TextInput
            style={[estilo.input]}
            placeholder="CONTRASEÑA"
            placeholderTextColor={'#000'}
            keyboardType="default"
          />

          <Pressable
            style={estilo.boton}
            onPress={() => {
              console.log('presionaste el boton');
            }}
          >
            <Text style={estilo.botontext}>INGRESAR</Text>
          </Pressable>

          {/* Contenedor que alinea el texto y el botón */}
          <View style={estilo.padre}>
            <Text style={estilo.text}>Si no posees una cuenta. </Text>
            <Pressable>
              <Text style={[estilo.text, estilo.textcreate]}>CREAR CUENTA</Text>
            </Pressable>
          </View>

          <Modal
          animationType='slide'
          visible={false}
          >
            <Text>Desde modal</Text>
          </Modal>

        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1, // Mantén el 100% de la pantalla
  },
  background: {
    flex: 1, // Hace que la imagen de fondo ocupe todo el espacio disponible
    justifyContent: 'center', // Alinea el contenido verticalmente
    alignItems: 'center', // Alinea el contenido horizontalmente
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '80%',
    height: 35,
    paddingLeft: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
  inputPrime: {
    marginTop: 450, // Puedes ajustar esto según el espacio necesario
  },
  text: {
    color: '#ffff',
    marginTop: 40, // Asegúrate de que este margen no se apile innecesariamente
  },
  boton: {
    backgroundColor: '#ffff',
    width: '50%',
    borderRadius: 10,
    paddingVertical: 15,
  },
  botontext: {
    textAlign: 'center',
    fontWeight:900
  },
  // Alineación horizontal y centrado para el texto y el botón de "Crear cuenta"
  padre: {
    display: 'flex',
    flexDirection: 'row', // Esto pone el texto y el botón en una fila
    alignItems: 'center', // Centra verticalmente
    justifyContent: 'center', // Centra horizontalmente
  },
  textcreate: {
    color: 'cyan',
    fontWeight: '700',
  }
});

export default Login;
