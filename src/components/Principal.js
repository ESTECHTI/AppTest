import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Principal extends Component {

    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Principal</Text>
            </View>
        )
    }
}

export default Principal;