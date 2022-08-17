import React from "react";
import {View, Text } from "react-native";


export default props =>(

    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.corFundo || 'black',
    }}>
        <Text style={{fontSize: 50,
        color: props.corTexto || 'white',
                
        }}>
            {props.children}
        </Text>
    </View>
    
)