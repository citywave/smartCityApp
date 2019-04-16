import React from 'react'
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import images from '../../assets/images';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image style={{ width: 200, height: 200 }} source={images.logo} />
                </View>
                <Text style={styles.welcome}>Home</Text>
                <Text style={styles.instructions}>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});