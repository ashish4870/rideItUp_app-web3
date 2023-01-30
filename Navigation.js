/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Screens/Login';
import Account from './src/Screens/Account';
import Wallet from './src/Screens/Wallet';
import TransactionHistory from './src/Screens/TransactionHistory';
import RidingHistory from './src/Screens/RidingHistory';
import MarketPlace from './src/Screens/MarketPlace';
import Bicycle from './src/Screens/Bicycle';
import { AuthContext } from './src/context/AuthContext';
import { View, ActivityIndicator } from 'react-native';
import Collection from './src/Screens/Collection';
import Home from './src/Screens/Home';
import Riding from './src/Screens/Riding';

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={'large'} />
    </View>;
  }

  return (
    <NavigationContainer>
      {userToken !== null ? (
        <Stack.Navigator
          initialRouteName="Account"
          screenOptions={screenOptions}>
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MarketPlace" component={MarketPlace} />
          <Stack.Screen name="Collection" component={Collection} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="Riding" component={Riding} />
          <Stack.Screen
            name="TransactionHistory"
            component={TransactionHistory}
          />
          <Stack.Screen name="RidingHistory" component={RidingHistory} />
          <Stack.Screen name="Bicycle" component={Bicycle} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
