import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tela2 from "../views/Tela2"
import Tela1 from "../views/Tela1"
import Tela3 from "../views/Tela3"



const Tab = createBottomTabNavigator()

export default props =>(


        <Tab.Navigator 
        screenOptions={  ({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  switch(route.name){
                        case 'Tela1':
                                iconName = focused
                                ? "information-circle"
                                : "information-circle-outline"
                                break;
                        case 'Tela2':
                                iconName = focused
                                ? "information-circle"
                                : "information-circle-outline"
                                break;
                        case 'Tela3':
                                iconName = focused
                                ? "list-box"
                                : "list"
                                break;        
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
               
                     

              })} 
              
              tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'blue',
                tabBarshowLabel: true,
                // tabBarlabelStyle: {fontSize: 30},
                barStyle: [
                        {
                          display: 'flex',
                          
                        },
                        
                      ],


              }} 

       
              initialRouteName="Tela2">

                <Tab.Screen name="Tela1" component={Tela1}
                        options={{title:'One'}}/>
                <Tab.Screen name="Tela2" component={Tela2}
                        options={{title:'Two'}}/>
                <Tab.Screen name="Tela3" component={Tela3}
                        options={{title:'Three'}}/>
                
        </Tab.Navigator>

      
)
    
