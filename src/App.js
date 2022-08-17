import React from "react";
import { SafeAreaView, Text } from "react-native";
import TextoCentral from "./components/TextoCentral";
import View1 from "./views/View1";
import View2 from "./views/View2";
import View3 from "./views/View3";



export default props =>(

    <SafeAreaView style={{
        flex:1,

    }}>
       
       {/* <TextoCentral>
        Lá vem eles de novo
       </TextoCentral>
        */}
        <View1 />
        <View2 />
        <View3 />


    </SafeAreaView>
    
)