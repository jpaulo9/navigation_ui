import React from "react";

import TextoCentral from "../components/TextoCentral";
import PassoStack from "../components/PassoStack";
import {Text, StyleSheet, View, Button} from "react-native";


export default props =>{
    
    return(

        <View style={{flex:1}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>

                    <Button title='Drawer' onPress={
                        
                        () => {

                        props.navigation.openDrawer()
                        setTimeout(()=>{
                                
                            props.navigation.closeDrawer()
                            
                        }, 3000)
                        
                    }}/>

            </View>
      

        <View style={{flex:1}}>
            <TextoCentral corFundo='green' corTexto='white'>
                View 4
            </TextoCentral>    
   
        </View>
            
       </View>    
       
       )

}