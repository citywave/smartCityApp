import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import SplashPage from '../modules/splash/splash.container';
import HomePage from '../modules/home/home.container';

// const HomeStack = createStackNavigator(
//     {
//         Home: HomePage,
//     }, {
//         initialRouteName: "Register",
//         headerMode: 'none',
//         navigationOptions: {
//             headerVisible: false,
//         }
//     });

export default createAppContainer(createSwitchNavigator(
    {
        Splash: SplashPage,
        Home: HomePage
    },
    {
        initialRouteName: 'Splash',
    }
));