/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

const LowerMiddleView = () => {
  const {logout, userEmail} = useContext(AuthContext);
  return (
    <View>
      <BalanceContent name="Account" value={userEmail} />
      <BalanceContent name="Referer" value="none" />
      <BalanceContent name="Invited user" value="0 person" />
      <BalanceContent name="Total distance" value="0 km" />
      <BalanceContent name="Feedack" value=">" />
      <BalanceContent name="Version" value="1.1.0" />
      <LogoutButton logout={logout} />
    </View>
  );
};

const BalanceContent = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
      marginBottom: 0,
      marginTop: 0,
      backgroundColor: '#333333',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderWidth: 0.2,
    }}>
    <Text style={{color: 'white', marginLeft: 10, fontFamily: 'Cochin'}}>
      {props.name}
    </Text>
    <Text style={{color: 'white', marginRight: 10, fontFamily: 'Cochin'}}>
      {props.value}
    </Text>
  </View>
);

const LogoutButton = props => (
  <View>
    <TouchableOpacity
      style={{
        alignItems: 'center',
        backgroundColor: '#FF5E0E',
        borderRadius: 30,
        margin: 20,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 35,
      }}
      onPress={() => props.logout()}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: '900',
          fontFamily: 'Cochin',
          paddingTop: 9,
          paddingBottom: 9,
        }}>
        LOGOUT
      </Text>
    </TouchableOpacity>
  </View>
);

export default LowerMiddleView;
