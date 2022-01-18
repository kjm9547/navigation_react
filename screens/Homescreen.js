import React from "react";
import { Button, View } from 'react-native'

function HomeScreen({navigation}){
    return(
        <View>
            <Button title="detal1열기"
            onPress={()=> navigation.push('detail',{id:1})}></Button>
            <Button title="detal2열기"
            onPress={()=> navigation.push('detail',{id:2})}></Button>
            <Button title="detal3열기"
            onPress={()=> navigation.navigate('detail',{id:3})}></Button>
            
        </View>
    )
}

export default HomeScreen;