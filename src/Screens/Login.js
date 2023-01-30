/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../Components/Login/Header';
import Middle from '../Components/Login/Middle';

const Login = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#1a1a1a', flex: 1}}>
      <View>
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
          <Header />
          <Middle />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
