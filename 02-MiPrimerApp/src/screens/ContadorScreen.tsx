import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {
    const [Contador, setContador] = useState(0)
  return (
    <View style={styles.cont}>
        <Text 
        style={styles.a}
        >
            Contador: {Contador}
        </Text>
          <Fab tittle="+1" />
      {/* boton de restar */}
      {/* <TouchableOpacity onPress={()=> setContador(Contador-1)}
       style={styles.fabLocationLeft}
      >
        <View style={styles.fab}>
        <Text style={styles.fabText}>
          -1
        </Text>
        </View>
      </TouchableOpacity> */}
          </View>
        )
      }


const styles=StyleSheet.create({
  cont:{
    flex:1,
    justifyContent:'center'
  },
  a:{
    
    fontSize:24,
    top:-15,
    textAlign:'center',
  }, 
 
  fabLocationRight:{
 position:'absolute',
 bottom:25,
 right:25
  },
  fabLocationLeft:{
    position:'absolute',
    bottom:25,
    left:25
     },
  fab:{
    backgroundColor:'#5856d6',
    width:60,
    height:60,
    borderRadius:100,
    justifyContent:'center',
  },
  fabText:{
    color: 'white',
    fontSize:25, 
    fontWeight:'bold',
    alignSelf:'center'

  }
})

