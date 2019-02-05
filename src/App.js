import React from 'react';
import SplashScreen from "./Components/Screens/SplashScreen";
import HomeScreen from "./Components/Screens/HomeScreen";

import LoginScreen from "./Components/Screens/Auth/LoginScreen";
import RegisterScreen from "./Components/Screens/Auth/RegisterScreen";

import { createStackNavigator, createSwitchNavigator, createAppContainer,createDrawerNavigator } from "react-navigation";

const appStackNavigator = createStackNavigator({HomeScreen})

const appDrawerNavigator = createDrawerNavigator({HomeScreen:appStackNavigator})

const AppNavigator = createSwitchNavigator(
  {
    SplashScreen,
    HomeScreen:appDrawerNavigator,
    LoginScreen,
    RegisterScreen
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}