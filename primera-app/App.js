import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Products from './src/components/Products/Products';
import ModalComponents from './src/components/Products/ModalComonent/ModalComponents';
import { DataProvider } from './src/components/Products/Context/DataContext';

export default function App() {


  return (
    <DataProvider>
      <View style={styles.container}>

        {/* <Text style={styles.titulo}>Hello </Text>
      
      <Text style={styles.subtitulo}>Sign in to you account</Text>
      <TextInput 
      placeholder='manu.ff@gmail.com'
      style={styles.textInput}
      />
      <TextInput
      placeholder='password'
      style={styles.textInput}
      /> */}
        <Products />
        <ModalComponents />
        <StatusBar style="auto" />
      </View>
    </DataProvider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#344340'
  },
  subtitulo: {
    fontSize: 25,
    color: 'gray'
  },
  textInput: {
    backgroundColor: '#fff',
    paddingStart: 20,
    width: '80%',
    borderRadius: 20,
    marginTop: 20,
    height: 50,

  }

});
