import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Home extends Component {
    render(){
        return (<View style={styles.body}>
            <Text style={styles.txtColor}>Welcome at Home</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    body:{
      flex: 1,
      marginTop: 15, 
      alignItems:'center',
      justifyContent: 'center',
    },
    txtColor:{
        color:'white',
        fontSize: 20
    }
});