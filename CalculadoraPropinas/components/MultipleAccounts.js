import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TextButton } from './components/TextButton';
import { Stepper } from './components/Stepper';
import Resultado from './components/Resultado';
import { useState } from 'react';
import PercentageButton from './components/PercentageButton';


export default function MultipleAccounts() {
  const [ importe, setImporte ] = useState('');
  const [ personas, setPersonas ] = useState('4');
  const [ propina, setPropina ] = useState('10');

  const [ cargoTip, setCargoTip] = useState('');
  const [ tipPerson, setTipPerson] = useState('');
  const [ totalAmount, setTotalAmount ] = useState('');
  const [ amountPerson, setAmountPerson ] = useState('');

  function onLimpiarButtonTapped() {
    setImporte('');
    setPersonas('1');
    setPropina('10');

    setCargoTip('');
    setTipPerson('');
    setTotalAmount('');
    setAmountPerson('');
  }

  function onCalcularButtonTapped() {
    const importeNum = parseFloat(importe);
    const propinaNum = parseFloat(propina);
    const personasNum = parseInt(personas);

    const calculoPropina = importeNum * (propinaNum / 100);
    const propinaPersona = calculoPropina / personasNum;
    const importeTotal = importeNum + calculoPropina;
    const importePersona = importeTotal / personasNum;
    
    const formatoMoneda = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    });
    
    setCargoTip(formatoMoneda.format(calculoPropina));
    setTipPerson(formatoMoneda.format(propinaPersona));
    setTotalAmount(formatoMoneda.format(importeTotal));
    setAmountPerson(formatoMoneda.format(importePersona));

    // setCargoTip(calculoPropina.toFixed(2));
    // setTipPerson(propinaPersona.toFixed(2));
    // setTotalAmount(importeTotal.toFixed(2));
    // setAmountPerson(importePersona.toFixed(2));

  }

  function onCalcularPorcentaje(propina) {
    setPropina(propina)
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerGeneal}>

        <View style={styles.containerImporte}>
          <Text style={styles.importe}>Importe:</Text>
          <TextInput style={styles.cantidadImporte} 
          onChangeText={(enteredText) => {
            setImporte(enteredText);
          }} 
          value={importe}/>
        </View> 

        <View style={styles.containerPersonas}>
          <Text style={styles.personas}># Personas: </Text>
          {/* Funcion anonima */}
          <TextInput style={styles.cantidadPersonas} 
          onChangeText={(enteredText) => {
            setPersonas(enteredText);
          }} 
          value={personas.toString()}/>
          <Stepper 
          minValue="1"
          maxValue="20"
          value={personas}
          onChange={(newValue) => setPersonas(newValue)}/>
        </View>

        <View style={styles.porcentajePropina}>
          <PercentageButton percentage="8"
          onTap={onCalcularPorcentaje}/>
          <PercentageButton percentage="10"
          onTap={onCalcularPorcentaje}/>
          <PercentageButton percentage="12.5"
          onTap={onCalcularPorcentaje}/>
          <PercentageButton percentage="15"
          onTap={onCalcularPorcentaje}/>
        </View>

        <View style={styles.containerPropina}>
          <Text style={styles.propina}>% Propina: </Text>
          <TextInput style={styles.cantidadPropina} 
          onChangeText={enteredText => {
            setPropina(enteredText);
          }} 
          value={propina.toString()}/>
          <Stepper
          
          maxValue="20"
          incremento="0.5"
          value={propina}
          onChange={(newValue) => setPropina(newValue)}/>
        </View>

      </View>

      {/* <View style={styles.botonesCalcularLimpiar}>
        <Button title='Calcular'/>
        <Button title='Limpiar'/>
      </View> */}
      
      <View style={styles.commandContainer}>
        <TextButton title='Calcular'
        onPress={onCalcularButtonTapped}/>
        <TextButton title='Limpiar'
        onPress={onLimpiarButtonTapped}
          buttonStyle={{backgroundColor: 'blue', borderColor: 'blue'}}/>
      </View>

      <View style={styles.resultContainer}>
        <Resultado
        descripcion="Importe de la propina: "
        valor={cargoTip}/>
        <Resultado
        descripcion="Propina por persona: "
        valor={tipPerson}/>
        <Resultado
        descripcion="Importe total: "
        valor={totalAmount}/>
        <Resultado
        descripcion="Importe por persona: "
        valor={amountPerson}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 2,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'top',
    paddingVertical: 40,
    paddingHorizontal: 15,
    alignItems: 'fill',
    flexDirection: 'column',
  },

  containerGeneal: {
    backgroundColor: 'lightgray',
    gap: 15,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 10,
    // borderWidth: 1
  },

  containerImporte: {
    flex: 0,
    flexDirection: 'row',
    gap: 30,
    // borderWidth: 1,
    // borderColor: 'blue',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  importe: {
    // borderWidth: 1,
    // borderColor: 'black',
    textAlign: 'center',
    fontSize: 20,
  },

  cantidadImporte: {
    // borderWidth: 1,
    // borderColor: 'black',
    fontSize: 20,  
    flex: 1,  
    justifyContent: 'flex-start'
  },

  containerPersonas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    gap: 10,
    paddingHorizontal: 10,
    // // backgroundColor: 'lightgray',
  },

  personas: {
    textAlign: 'center',
    fontSize: 20,
  },

  cantidadPersonas: {
    // borderWidth: 1,
    fontSize: 20,  
    flex: 1,  
    justifyContent: 'flex-start',
  },
  
  porcentajePropina: {
    flexDirection: 'row',
    // backgroundColor: 'lightgray',
    gap: 15,
    justifyContent: 'space-evenly',
    // borderWidth: 2
  },

  containerPropina: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    paddingHorizontal: 10,
    // borderWidth: 1,
    
    // backgroundColor: 'lightgray',
  }, 

  propina: {
    textAlign: 'center',
    fontSize: 20,
  },

  cantidadPropina: {
    //  borderWidth: 1,
     fontSize: 20,  
     flex: 1,  
     justifyContent: 'flex-start',
  }, 

  botonesCalcularLimpiar: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-evenly',
    padding: 20,
    borderWidth: 2,
  },

  commandContainer: {
    flexDirection: 'row',
    marginVertical: 32,
    justifyContent: 'space-evenly',
    
  },

  resultContainer: {
    backgroundColor: 'lightgray',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
  }

});
