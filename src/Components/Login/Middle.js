/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const Middle = () => {
  const {login, getOtp, receivedOtp} = useContext(AuthContext);
  const [otp, setOtp] =  useState(null);
  const [ email, setEmail ] =  useState(null);
  return (
    <View
      style={{
        marginTop: 20,
        marginLeft: 30,
        paddingBottom: 100,
        backgroundColor: '#333333',
        borderTopLeftRadius: 50,
      }}>
      <Profile />
      <InputBox placeholder={'Email'} email={email} setEmail={setEmail} />
      <Otp getOtp={getOtp} email={email}/>
      <InputBoxOtp placeholder={'OTP code'} otp={otp} setOtp={setOtp}/>
      <OtpNotReceived />
      <LoginButton login={login} receivedOtp={receivedOtp} otp={otp}/>
    </View>
  );
};

const Profile = () => {
  return (
    <View
      style={{
        width: 80,
        height: 80,
        borderRadius: 1000,
        overflow: 'hidden',
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: '#FF5E0E',
      }}>
      <Image
        style={{alignSelf: 'center', marginTop: 17}}
        source={require('../../Assets/icons/icons8-account-48.png')}
      />
    </View>
  );
};

const InputBox = props => {
  return (
    <View>
      <TextInput
        style={{
          height: 45,
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 10,
        }}
        placeholder={props.placeholder}
        value={props.email}
        onChangeText={text => props.setEmail(text)}
      />
    </View>
  );
};

const InputBoxOtp = props => {
  return (
    <View>
      <TextInput
        style={{
          height: 45,
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 10,
        }}
        placeholder={props.placeholder}
        value={props.otp}
        onChangeText={text => props.setOtp(text)}
      />
    </View>
  );
};

const Otp = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: '#FF5E0E',
        padding: 5,
        marginLeft: 125,
        marginRight: 125,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 20,
      }}
      onPress={() => props.getOtp(props.email)}>
      <Text style={{color: 'white', fontWeight: '800', padding: 3}}>
        GET OTP
      </Text>
    </TouchableOpacity>
  </View>
);

const OtpNotReceived = () => (
  <View
    style={{
      marginTop: 20,
      alignItems: 'center',
      textDecorationLine: 'underline',
    }}>
    <TouchableOpacity>
      <Text style={{textDecorationLine: 'underline', color: 'white'}}>
        Didn't receive OTP code?
      </Text>
    </TouchableOpacity>
  </View>
);

const LoginButton = (props) => (
  <View style={{margin: 20, marginLeft: 30, marginRight: 30}}>
    <TouchableOpacity
      style={{
        backgroundColor: '#FF5E0E',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        alignItems: 'center',
      }}
      onPress={() => props.login(props.receivedOtp, props.otp)}>
      <Text
        style={{
          color: '#e5e5e5',
          fontSize: 25,
          fontWeight: '900',
        }}>
        Login
      </Text>
    </TouchableOpacity>
  </View>
);
export default Middle;
