import React from 'react'
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import images from '../../assets/images';

class SplashPage extends Component {

    constructor(props) {
        super(props);
        setTimeout(function () {
            props.navigation.navigate('Home');
        }, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#1b2232" barStyle="light-content" />
                <View>
                    <Image style={{ width: 100, height: 150 }} source={images.millLogo} />
                </View>
                <Text style={styles.splashTitle}>C I T Y W A V E</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1b2232',
    },
    splashTitle: {
        fontSize: 25,
        color: '#ffffff',
        textAlign: 'center',
        margin: 10,
    }
});


const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {})(SplashPage);