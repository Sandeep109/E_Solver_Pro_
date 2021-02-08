import * as React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import android_studio_sites from './screens/android_studio_sites';
import platform_screen from './screens/platform_screen';
import react_native_sites from './screens/react_native_sites';
import unity_sites from './screens/unity_sites';
import java_sites from './screens/java_sites';
import web_development_sites from './screens/web_development_sites';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{

  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
  

}
var AppNavigator = createSwitchNavigator({
  platform_screen:platform_screen,
  android_studio_sites:android_studio_sites,
  react_native_sites:react_native_sites,
  unity_sites:unity_sites,
  java_sites:java_sites,
  web_development_sites:web_development_sites,
  
})

const AppContainer = createAppContainer(AppNavigator)


