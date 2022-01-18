import React from "react";
import { Text, View, Button } from 'react-native'

function DetailScreen({route,navigation}){
    return(
        <View>
            <Text>detail id:{route.params.id}</Text>
            <Button title="다음" onPress={()=>navigation.navigate('detail',{id:route.params.id+1})}></Button>
            
            <Button title="뒤로가기" onPress={()=>navigation.pop()}></Button>
            <Button title="처음으로" onPress={()=>navigation.popToTop()}></Button>
        </View>
    )
}

export default DetailScreen;