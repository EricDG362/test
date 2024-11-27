import React , { useState } from 'react'
import {Text, Modal,SafeAreaView, StyleSheet, TextInput, View, Pressable,
  TouchableWithoutFeedback, Keyboard,
  KeyboardAvoidingView,
  Platform
} from 'react-native'


interface FormularioModalProps {
  modalVisible: boolean; // Especificamos que modalVisible es un booleano
}

//aca se loo asignamos
const FormularioModal = ( {modalVisible}:FormularioModalProps ) => {




  return (


    <Modal
    animationType='slide'
    visible={modalVisible}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={estilo.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <SafeAreaView style={estilo.container}>
        
    
    <View style={estilo.campo} >
      <Text style={estilo.label} >NOMBRE</Text>
      <TextInput 
      style={estilo.input}
      
      />
      </View>

      <View style={estilo.campo}>
      <Text style={estilo.label} >APELLIDO</Text>
      <TextInput 
      style={estilo.input}
      
      />
      </View>

      <View style={estilo.campo}>
      <Text style={estilo.label} >EMAIL</Text>
      <TextInput 
      style={estilo.input}
      
      />
      </View>

      <View style={estilo.campo}>
      <Text style={estilo.label} >PASSWORD</Text>
      <TextInput 
      style={estilo.input}
      
      />
      </View>

      <Pressable
      style={estilo.boton}
      >
        <Text style={estilo.BotonText}>CREAR CUENTA</Text>
      </Pressable>

      
      </SafeAreaView>
     </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>


  )
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: '#000',
    flex: 1,
    justifyContent:'center',
    

  },
  campo:{
    alignItems:'center'
  },
  label:{
    textAlign:'left',
    color:'#fff',
    fontWeight:900,
    marginBottom:10
  },
  input:{
    borderRadius:20,
    backgroundColor:'#fff',
    width:'70%',
    paddingVertical:10,
    marginBottom:20
    
  },
  boton:{
    backgroundColor: 'cyan',
    paddingVertical:20,
    borderRadius:30,
    marginTop:50,
  },
  BotonText:{
    fontWeight:800,
    textAlign:'center'
  },
})

export default FormularioModal