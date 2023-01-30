/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../Components/MarketPlace/Header';
import {Divider} from 'react-native-elements';
import Middle from '../Components/MarketPlace/Middle';
import Filter from '../Components/MarketPlace/Filter';
import Tabs from '../Components/Tabs/Tabs';

const MarketPlace = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#1a1a1a', flex: 1}}>
        <Header navigation={navigation} screenName={'BICYCLE'}/>
        <Divider width={1} style={{marginTop: 15, marginBottom: 10}} />
        <Filter />
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
          <Middle navigation={navigation} screen={'MarketPlace'}/>
        </ScrollView>
        <Divider width={1} style={{marginTop: 0, marginBottom: 10}} />
        <Tabs navigation={navigation} screen = {'Marketplace'}/>
    </SafeAreaView>
  );
};

export default MarketPlace;
