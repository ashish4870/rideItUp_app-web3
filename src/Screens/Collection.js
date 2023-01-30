/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../Components/MarketPlace/Header';
import {Divider} from 'react-native-elements';
import Middle from '../Components/Collection/Middle';
import Filter from '../Components/MarketPlace/Filter';
import Tabs from '../Components/Tabs/Tabs';

const Collection = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#1a1a1a', flex: 1}}>
        <Header navigation={navigation} screenName={'MY COLLECTION'}/>
        <Divider width={1} style={{marginTop: 15, marginBottom: 10}} />
        <Filter />
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
        <Middle navigation={navigation} screen={'Collection'} />
        </ScrollView>
        <Divider width={1} />
        <Tabs navigation={navigation} screen={'Collection'}/>
        </SafeAreaView>
  );
};

export default Collection;
