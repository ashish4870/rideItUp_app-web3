/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../Components/Account/Header';
import {Divider} from 'react-native-elements';

const TransactionHistory = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{marginTop: 15}}>
        <Header title={'TRANSACTION HISTORY'} marginLeft={30} />
        <Divider width={1} />
      </View>
    </SafeAreaView>
  );
};

export default TransactionHistory;
