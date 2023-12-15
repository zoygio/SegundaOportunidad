
import React from 'react';
import { View, Text } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Acerca de la aplicacion:
      appName: 'Propinapp',
  version: '1.0.0',
  description: 'Propinapp es una calculadora de propinas diseñada para hacer que el proceso de calcular y dividir propinas sea rápido y sin complicaciones.',
  author: 'Giovanny Mendoza',
  year: 2023,
  license: 'MIT',

  features: [
    'Calcula la propina fácilmente basándote en el monto de la factura y el porcentaje deseado.',
    'Interfaz de usuario minimalista y amigable.',
    'Personalización del porcentaje de propina para adaptarse a tus preferencias.',
    'Opción para dividir la cuenta entre varias personas de manera equitativa.',
    'Conversión automática a diferentes monedas para viajeros internacionales.',
    'Registro de historial para hacer un seguimiento de las propinas anteriores.',
  ],
      </Text>
    </View>
  );
};

export default AboutScreen;
