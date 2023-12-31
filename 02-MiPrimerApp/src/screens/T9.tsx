import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const T9 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
        <View style={styles.cajaAzul} />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
       
        

    },
    cajaMorada:{
        height:100,
        width:100,
       

        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        top:100
      
    },
    cajaNaranja:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        left:100,
        
        
    },
    cajaAzul:{
        width:100,
        height:100,
    
      
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
        
       
    },


});
