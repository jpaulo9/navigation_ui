import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Tela2 from "../views/Tela2"
import Tela1 from "../views/Tela1"
import Tela3 from "../views/Tela3"
import Tela4 from "../views/Tela4"



const Drawer = createDrawerNavigator()

export default props =>{ 
        
        return(


        <Drawer.Navigator initialRouteName={Tela2}>

                <Drawer.Screen name="Tela1" component={Tela1}/>
                <Drawer.Screen name="Tela2" component={Tela2}/>
                <Drawer.Screen name="Tela3" component={Tela3}/>
                <Drawer.Screen name="Tela4" component={Tela4}/>
                

        </Drawer.Navigator>


        )
        
}
    
