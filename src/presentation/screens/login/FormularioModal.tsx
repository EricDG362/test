import React , { useState } from 'react'
import {Text, Modal} from 'react-native'


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
      <Text>Desde modal</Text>
    </Modal>


  )
}

export default FormularioModal