/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { BASE_URL } from '../Config/constants';
import { Linking, Alert } from 'react-native';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [receivedOtp, setReceivedOtp] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [nfts, setNfts] =  useState(null);
  const [userEmail, setUserEmail] =  useState(null);
  const [userName, setUserName] =  useState(null);
  const [allNftData, setAllNfts] = useState([]);
  const [userNfts, setUserNft] = useState([]);

  const handlePress = async (url) => {
    console.log(url);
    const supported = await Linking.canOpenURL(url);
    if (true) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Please install metamask wallet from play/app store !!!');
    }
  };

  const buyNft = async(nftId) => {
    try {
      let userToken = await AsyncStorage.getItem('userToken');
      console.log(nftId);
      setIsLoading(true);
      const res = await axios.post(
        `${BASE_URL}/nft/buyNft`,
        {
          'nftId': nftId,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log()
      const address =  res.data.data.address;
      const price = res.data.data.price;
      const nftBuyDeepLink = `https://metamask.app.link/send/${address}@80001?value=${price}`;
      await handlePress(nftBuyDeepLink);
      Alert.alert('Ownership process initiated');
      setIsLoading(false);
    } catch (e) {
      Alert.alert('Transaction is under process, please wait...');
    }
  };

  const getNftByOwnerId = async() => {
    try {
        let userToken = await AsyncStorage.getItem('userToken');
        let userId = await AsyncStorage.getItem('userId');
        setIsLoading(true);
        const res = await axios.get(
          `${BASE_URL}/nft/userId/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        const userNft = res.data.data.nfts;
        const userNfts = [];
        userNfts.push(userNft);
        setUserNft(userNfts);
        console.log(userNfts)
        setIsLoading(false);
    } catch (e) {
      Alert.alert('Something went wrong while fetching collection data');
    }
  }

  const getNfts = async() => {
    try {
      let userToken = await AsyncStorage.getItem('userToken');
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}/nft/allNft`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const allNfts = res.data.data.nfts;
      const allNftData = [];
      for(let i = 0;  i<allNfts.length; i++) {
        if(allNfts[i].userId === null) {
          allNftData.push(allNfts[i]);
        }
      }
      setAllNfts(allNftData);
      setIsLoading(false);
    } catch (e) {
      Alert.alert('Something went wrong while fetching nfts');
    }
  };

  const refreshWallet = async() => {
    try {
        let userToken = await AsyncStorage.getItem('userToken');
        setIsLoading(true);
        const res = await axios.get(
          `${BASE_URL}/wallet/getWalletDetails`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        const tokens = res.data.data.walletDetails.token;
        const nfts = res.data.data.walletDetails.numOfNftOwned;
        setTokens(tokens);
        setNfts(nfts);
        // await AsyncStorage.setItem('tokens', tokens.toString());
        // await AsyncStorage.setItem('nfts', nfts.toString());
        setIsLoading(false);
    } catch (e) {
      console.log('Error occured in [refreshWallet]', e);
    }
  };

  const getUserDetails = async () => {
    try {
        let userToken = await AsyncStorage.getItem('userToken');
        setIsLoading(true);
        const res = await axios.get(
          `${BASE_URL}/user/getUser`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        const email =  res.data.data.user.email;
        const userName = res.data.data.user.email.split('@')[0];
        setUserEmail(email);
        setUserName(userName);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('userName', userName);
        setIsLoading(false);
    } catch (e) {
      Alert.alert('Something went wrong while fetching the user data');
    }
  };

  const tokenWithdrawRequest = async (token) => {
    try {
        let userToken = await AsyncStorage.getItem('userToken');
        setIsLoading(true);
        const res = await axios.post(
          `${BASE_URL}/wallet/withdrawToken`,
          {
            'token': token,
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        const estimatedGasAmount = res.data.data.estimatedFee;
        const gasCollectorAddress = res.data.data.gasFeeAddress;
        const deepLink = `https://metamask.app.link/send/${gasCollectorAddress}@80001?value=${estimatedGasAmount}e10`;
        await handlePress(deepLink);
        setIsLoading(false);
    } catch (e) {
      Alert.alert('Something went wrong while withdrawing tokens');
    }
  };

  const getOtp = (email) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/user/signIn`, {
        email,
      })
      .then((res) => {
        setReceivedOtp(res.data.data.userId);
        AsyncStorage.setItem('userId', res.data.data.userId);
        console.log(res.data.data.userId, 'This is userId');
      })
      .catch((e) => {
        Alert.alert('Something went wrong while getting otp');
      });
    setIsLoading(false);
  };

  const login = (userId, otp) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/user/verifySignIn`, {
        userId,
        otp,
      })
      .then((res) => {
        let userInfo = res.data.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.token);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken', userInfo.token);
      })
      .catch((e) => {
        Alert.alert('Something went wrong while login');
      });
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserToken(userInfo);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error1 ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
    getNftByOwnerId();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        refreshWallet,
        login,
        logout,
        getOtp,
        tokenWithdrawRequest,
        getUserDetails,
        getNfts,
        buyNft,
        handlePress,
        getNftByOwnerId,
        userNfts,
        userEmail,
        userName,
        receivedOtp,
        isLoading,
        userToken,
        tokens,
        nfts,
        allNftData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
