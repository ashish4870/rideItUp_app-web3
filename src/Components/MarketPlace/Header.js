/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { AuthContext } from '../../context/AuthContext';


const Header = ({navigation, ...props}) => {
  const { refreshWallet, getUserDetails } = useContext(AuthContext);
  return (
    <View>
      <PrimaryContent navigation={navigation} refreshWallet={refreshWallet} getUserDetails={getUserDetails}/>
      <SecondaryContent screenName={props.screenName}/>
    </View>
  );
};

const PrimaryContent = (props) => {
  const changeState = () => {
    props.refreshWallet();
    props.navigation.navigate('Wallet');
  };
  const changeStateAccount = () => {
    props.getUserDetails();
    props.navigation.navigate('Account');
  };
  return (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <TouchableOpacity
      onPress = {()=> changeStateAccount()}>
      <Image
        style={{
          width: 30,
          height: 30,
          borderRadius: 1000,
          borderColor: 'white',
          borderWidth: 2,
          overflow: 'hidden',
          marginLeft: 15,
          marginTop: 11,
        }}
        source={require('../../Assets/images/lo2.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{flexDirection: 'row', marginRight: 15, marginTop: 11}}
      onPress = {()=> changeState()}>
      <Fontisto name="wallet" size={25} color="#FF5E0E" />
    </TouchableOpacity>
  </View>
)};

const SecondaryContent = (props) => (
  <View style={{alignItems: 'center', marginTop: 5}}>
    <Text
      style={{
        color: '#FF5E0E',
        fontSize: 20,
        fontWeight: '900',
        fontFamily: 'ObjectivityBold',
      }}>
      {props.screenName}
    </Text>
  </View>
);

export default Header;
