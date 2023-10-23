import { useState } from "react"
import { Text, TouchableOpacity, View, StyleSheet } from "react-native"

interface Props{
    tittle:String;
}
export const Fab = ({tittle}:Props) => {
    const [contador, setContador] = useState(10)
      
  return (

   
    <TouchableOpacity onPress={()=>console.log('click')}
    style={styles.fabLocationRight}
    >
      <View style={styles.fab}>
      <Text style={styles.fabText}>
       {tittle}
      </Text>
      </View>
    </TouchableOpacity>
    
  )
}
const styles=StyleSheet.create({
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
