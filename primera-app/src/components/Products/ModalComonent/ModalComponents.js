import React, {useState, useContext} from 'react';
import {DataContext} from '../Context/DataContext';
import { Modal, StyleSheet, Text, Pressable, View, FlatList} from 'react-native';

const ModalComponents = () => {
    const {cart, setCart, buyProducts}= useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);

  const total = cart.reduce((acc,el) => acc + el.quanty *
  el.price , 0)

  //Restar productos
  const handelRestarProducts = (product)=>{
    const productRepeat =  cart.find((item)=> item.id ===
    product.id)
    productRepeat.quanty !== 1 &&
     setCart(cart.map((item)=> (item.id === product.id ?
        {...product, quanty :productRepeat.quanty - 1}:
        item)))     
}
//Eliminar Productos
const handleElimiarProducts=(product)=>{
  setCart(cart.filter((item)=>item.id !==product.id))
}



  //incrementar
  const handleBuyProducts=(product)=>{
    buyProducts(product);
}
  return (
    <View >
        
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(!modalVisible);
        }}>
        <View >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Products in the Cart</Text>
            <Pressable
              style={[styles.buttons, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>✖</Text>
            </Pressable>
            <FlatList data= {cart}
            renderItem={({item})=>(
             <View style={styles.textStyle}>
             <Text style={styles.producto}>{item.productName}</Text> 

             <Text style={styles.modalView}>
               <Pressable onPress={()=>handelRestarProducts(item)}>
                <Text style={styles.buttomsel}>➖</Text>
               </Pressable>

              <Text style={styles.modalView}>{item.quanty}</Text>
               
               <Pressable  onPress={()=>handleBuyProducts(item)}>
                <Text  style={styles.buttomsel}>➕</Text>
               </Pressable>
             </Text>

             <Text style={styles.textotal}>Total: ${item.quanty * item.price}
             <Pressable onPress={()=>handleElimiarProducts(item)}>
              <Text style={styles.modalView}>Eliminar del carrito❌</Text>
             </Pressable>
             
             </Text>
             </View>
            )}
            keyExtractor={(item) =>item.id} 
            />
            <Text style= {styles.textStyle}>Total: ${total} </Text>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Ver carrito: 🛒</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
 
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    textAlign: 'center',
    shadowColor: '#05a660',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttomsel:{
    marginRight: 30,
    marginLeft: 30,
    fontSize: 19
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    left:130,
  },
 
  buttons:{
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',

  },
  buttonClose: {
    backgroundColor: '#25633F3',
  },
  textStyle: {
    color: 'red',
    fontWeight: 'bold',
  },
  textotal:{
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    
  },
  producto:{
    fontSize:30,
    textAlign: 'center',
     
  }
});

export default ModalComponents;
