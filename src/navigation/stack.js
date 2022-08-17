import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tela2 from "../views/Tela2"
import Tela1 from "../views/Tela1"
import Tela3 from "../views/Tela3"
import PassoStack from "../components/PassoStack";



const Stack = createStackNavigator()

export default props =>(

        <Stack.Navigator initialRouteName="Tela1" screenOptions={{hearderShown: true}}>

            <Stack.Screen name="Tela1" options={{title: 'Home'}}>
                {props =>(
                    <PassoStack {...props} avancar="Tela2">
                        <Tela1/>
                    </PassoStack>
                )}
            </Stack.Screen>

            <Stack.Screen name="Tela2" options={{title: 'Two'}}>
                {props =>(
                    <PassoStack {...props}  voltar avancar="Tela3">
                        <Tela2/>
                    </PassoStack>
                )}
            </Stack.Screen>

            <Stack.Screen name="Tela3" voltar options={{title: 'Three'}}>
                {
                    props=>(
                        <PassoStack {...props} voltar avancarParams={1007}>
                            <Tela3/>
                        </PassoStack>
                    )
                }
            </Stack.Screen>
     

        </Stack.Navigator>
)
    
