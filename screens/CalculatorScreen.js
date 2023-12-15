import React, { useState } from 'react';
import { StatusBar, TextInput, Button, Text, View, TouchableOpacity } from 'react-native';
const CalculatorScreen = ({ navigation }) => 
{
  const [cuenta, setCuenta] = useState('');
  const [personas, setPersonas] = useState(1);
  const [porcentajePropina, setPorcentajePropina] = useState(10);
  const [totalPropina, setTotalPropina] = useState(0);
  const [totalCuenta, setTotalCuenta] = useState(0);
  const [totalPorPersona, setTotalPorPersona] = useState(0);

  const calcularPropina = () => {
    const cuentaFloat = parseFloat(cuenta);
    const propina = (cuentaFloat * porcentajePropina) / 100;
    const total = cuentaFloat + propina;
    const totalPorPersona = total / personas;

    setTotalPropina(propina);
    setTotalCuenta(total);
    setTotalPorPersona(totalPorPersona);
  };

  const irAPantallaDePago = () => {
    navigation.navigate('PantallaDePago', {
      totalPropina,
      totalCuenta,
      totalPorPersona,
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculador de Propinas</Text>
      <TextInput
        style={styles.input}
        placeholder="Importe de la cuenta"
        keyboardType="numeric"
        value={cuenta}
        onChangeText={(text) => setCuenta(text)}
      />
      <View style={styles.rowContainer}>
        <Text style={styles.label}>¿Cuantas Personas son?: {personas}</Text>
        <Button title="+" onPress={() => setPersonas(personas + 1)} />
        <Button title="-" onPress={() => setPersonas(Math.max(personas - 1, 1))} />
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.label}>Propina%: {porcentajePropina}%</Text>
        <Button title="10%" onPress={() => setPorcentajePropina(10)} />
        <Button title="12.5%" onPress={() => setPorcentajePropina(12.5)} />
        <Button title="15%" onPress={() => setPorcentajePropina(15)} />
        <Button title="20%" onPress={() => setPorcentajePropina(20)} />
      </View>

      <Button title="Calcular Propina" onPress={calcularPropina} />

      <View style={styles.resultadosContainer}>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoLabel}>Propina:</Text>
          <Text style={styles.resultado}>${totalPropina.toFixed(2)}</Text>
        </View>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoLabel}>Total:</Text>
          <Text style={styles.resultado}>${totalCuenta.toFixed(2)}</Text>
        </View>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoLabel}>Importe x persona:</Text>
          <Text style={styles.resultado}>${totalPorPersona.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.pagarButton} onPress={irAPantallaDePago}>
        <Text style={styles.pagarButtonText}>Calcular</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 15,
  },
  input: {
    height: 45,
    borderColor: 'red',
    borderWidth: 3,
    marginBottom: 13,
    paddingHorizontal: 5,
    width: '100%',
    backgroundColor: '#fff',
    color: '#333',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginRight: 10,
    color: 'blue',
  },
  resultadosContainer: {
    marginTop: 20,
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: 8,
    padding: 16,
  },
  resultadoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  resultadoLabel: {
    color: '#fff',
  },
  resultado: {
    color: '#fff',
  },
  pagarButton: {
    backgroundColor: 'red',
    padding: 30,
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'negro'
  },
  pagarButtonText: {
    color: '##008000',
    textAlign: 'center',
    fontSize: 18,
  },
};



export default CalculatorScreen;