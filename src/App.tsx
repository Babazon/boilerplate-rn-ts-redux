import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import ItemDetail from './pages/ItemDetail';
import ItemList from './pages/ItemList';
import {store} from './state/Redux';

const StackNavigator = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <StackNavigator.Navigator initialRouteName="List">
            <StackNavigator.Screen
              name="List"
              component={ItemList}
              options={{
                ...sharedHeaderOptions,
              }}
            />
            <StackNavigator.Screen
              name="Detail"
              component={ItemDetail}
              options={{
                ...sharedHeaderOptions,
              }}
            />
          </StackNavigator.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const sharedHeaderOptions: Partial<StackNavigationOptions> = {
  headerBackTitle: 'Back',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default App;
