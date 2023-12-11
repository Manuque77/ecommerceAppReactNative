import React,{ useContext } from 'react'
import { Text, Pressable, View, FlatList, Image, StyleSheet } from 'react-native'
import { DataContext } from '../Products/Context/DataContext.js'

const Products = () => {
 const { buyProducts } = useContext (DataContext)

    const productos= [
        {        
        id: 1,
        productName: 'rey Ataulfo',
        price: 50,
        img: "https://html6.es/img/rey_ataulfo",
        },
         {        
        id: 2,
        productName: 'rey Atanagildo',
        price: 150,
        img: "https://html6.es/img/rey_atanagildo",
        },

        {        
        id: 3,
        productName: 'rey Leogivildo',
        price: 250,
        img: "https://html6.es/img/rey_leogivildo",
        },
        {        
        id: 4,
        productName: 'rey Atanagildo',
        price: 350,
        img: "https://html6.es/img/rey_sisebuto",
        }       
    ]
    const handleBuyProducts=(product)=>{
        buyProducts(product);
    }
  return (
     <View style={styles.container}>
        <Text style={styles.header}> Ecommerce App</Text>
        <FlatList data ={productos}
        renderItem={({item})=>(
        <View>
        <Image source={{uri:item.img}} style=
        {styles.productImage} />
        <Text style={styles.productsName}>{item.productName}</Text>
        <Text style={styles.priceName}>Precio: $ {item.price}</Text>
        <Pressable style={styles.buyButton}
         onPress={()=> handleBuyProducts(item)} >
        <Text style={styles.buyButtonText}>Comprar</Text>
        </Pressable>
        </View>
   ) } 
 keyExtractor={(item)=> item.id}
 />

     </View>
        
  )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    header:{
     fontSize:30,
     padding:38,
    },
    productImage:{
        width: 170,
        height: 145,
        resizeMode: 'cover',
        
    },
    productsName:{
        fontSize:16,
        color: 'green',
        textAlign:'center'
    },
    priceName:{
        fontSize:16,
        textAlign:'center',
        marginBottom:2
    },
    buyButton:{
        backgroundColor: '#1bdb7f',
        padding: 8,
        width: 150,
        alignItems: 'center',
        marginBottom:45,
        borderRadius: 10,
        margin: 12

    },
    buyButtonText:{
       color: 'white',
       fontSize: 16,
       textAlign: 'center'
    }
    
    }
)

export default Products

