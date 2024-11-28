import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/presentation/screens/login/Login';
import Home from './src/presentation/screens/home/Home';
import Archivos from './src/presentation/screens/archivos/Archivos';
import Nuevo from './src/presentation/screens/archivos/Nuevo';
import FormularioModal from './src/presentation/screens/login/FormularioModal';



const App = () => {


  return (
    <NavigationContainer>

      
      <Nuevo />
      
      
      </NavigationContainer>
    
  );
};



export default App;
