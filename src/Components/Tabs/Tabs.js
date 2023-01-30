/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../context/AuthContext';

const Tabs = ({navigation}) => {
  const { getNfts, getNftByOwnerId, getUserDetails } = useContext(AuthContext);
  const [colorExercise, setColorExercise] = useState('white');
  const [colorNFTs, setColorNFTs] = useState('white');
  const [colorMarketplace, setColorMarketplace] = useState('white');
  const [colorAccount, setColorAccount] = useState('white');
  const changeStateExercise = () => {
    navigation.navigate('Home');
    getNftByOwnerId();
    // setColorExercise('#FF5E0E');
  };
  const changeStateNFTs = () => {
    navigation.navigate('Collection');
    getNftByOwnerId();
    // setColorNFTs('#FF5E0E');
  };
  const changeStateMarketplace = () => {
    navigation.navigate('MarketPlace');
    getNfts();
    // setColorMarketplace('#FF5E0E');
  };
  const changeStateAccount = () => {
    navigation.navigate('Account');
    getUserDetails();
    // setColorAccount('#FF5E0E');
  };

  return (
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
        <TouchableOpacity style={{alignItems:'center'}}
           onPress = {()=> changeStateExercise()}>
          <Ionicons name="bicycle" size={20} color={colorExercise} />
          <Text style={{color: colorExercise}}>Exercise</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}
        onPress = {()=> changeStateNFTs()}>
          <Ionicons name="ios-albums" size={20} color={colorNFTs} />
          <Text style={{color: colorNFTs}}>NFTs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}
          onPress = {()=> changeStateMarketplace()}>
          <Entypo name="shopping-cart" size={20} color={colorMarketplace} />
          <Text style={{color: colorMarketplace}}>MarketPlace</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}
          onPress = {()=> changeStateAccount()}>
          <MaterialCommunityIcons name="account-circle" size={20} color={colorAccount} />
          <Text style={{color: colorAccount}}>Account</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Tabs;

{/* <queries>
<intent>
  <action android:name="android.intent.action.VIEW" />
  <data android:scheme="https"/>
</intent>
</queries> */}
