/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListScreen, DetailScreen } from './src/Screens';

const { Screen, Navigator } = createStackNavigator();

const App = () => {

  const [musicData, setmusicData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get('https://itunes.apple.com/search?term=Michael+jackson')
        setmusicData(response.data.results)
      } catch (err) {
        console.log('Error occurred in getting data')
      }
    }
    fetchData();
  }, [])

  return (
    <NavigationContainer >
      <Navigator initialRouteName="Songs">
        <Screen name="Songs">
          {props => <ListScreen {...props} musicList={musicData} />}
        </Screen>
        <Screen name="Song Detail" component={DetailScreen} />
      </Navigator>
    </NavigationContainer>

  );
};


const styles = StyleSheet.create({
  body: {
    backgroundColor: '#02AFAC',
  }
});

export default App;
