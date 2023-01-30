/* eslint-disable react-native/no-inline-styles */

import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { AuthContext } from '../../context/AuthContext';

const nfts = [
  {
    imageUrl: require('../../Assets/images/A.jpg'),
    level: '4',
    bikeType: 'LEGENDARY-BIKE',
    bikeId: '#005',
    price: '25 MATIC',
    nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=25e18',
    performance: '60',
    durability: '60',
    ownerId: 'RideItUp',
    distanceNft: '7 - 8 km',

  },
  {
    nftSource: require('../../Assets/images/B.jpg'),
    level: '3',
    bikeType: 'SUPER-BIKE',
    bikeId: '#006',
    price: '20 MATIC',
    nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=20e18',
    performance: '50',
    durability: '50',
    owner: 'RideItUp',
    distanceNft: '6 - 7 km',
  },
  {
    nftSource: require('../../Assets/images/legendary_bike.jpg'),
    level: '3',
    bikeType: 'LEGENDARY-BIKE',
    bikeId: '#001',
    price: '15 MATIC',
    nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=15e18',
    performance: '40',
    durability: '40',
    owner: 'RideItUp',
    distanceNft: '5 - 6 km',
  },

  {
    nftSource: require('../../Assets/images/super_bike.jpeg'),
    level: '2',
    bikeType: 'SUPER-BIKE',
    bikeId: '#002',
    price: '10 MATIC',
    nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=10e18',
    performance: '30',
    durability: '30',
    owner: 'RideItUp',
    distanceNft: '4 - 5 km',
  },
  {
    nftSource: require('../../Assets/images/C.jpg'),
    level: '2',
    bikeType: 'LITE-BIKE',
    bikeId: '#007',
    price: '15 MATIC',
    nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=15e18',
    performance: '20',
    durability: '20',
    owner: 'RideItUp',
    distanceNft: '3 - 4 km',
  },
  {
    nftSource: require('../../Assets/images/lite_bike.jpg'),
    level: '1',
    bikeType: 'LITE-BIKE',
    bikeId: '#003',
    price: '5 MATIC',
    nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=5e18',
    performance: '20',
    durability: '20',
    owner: 'RideItUp',
    distanceNft: '3 - 4 km',
  },
  {
    nftSource: require('../../Assets/images/super_bike.jpeg'),
    level: '2',
    bikeType: 'SUPER-BIKE',
    bikeId: '#002',
    price: '10 MATIC',
    nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=10e18',
    performance: '30',
    durability: '30',
    owner: 'RideItUp',
    distanceNft: '4 - 5 km',
  },
  {
    nftSource: require('../../Assets/images/B.jpg'),
    level: '3',
    bikeType: 'SUPER-BIKE',
    bikeId: '#006',
    price: '20 MATIC',
    nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=20e18',
    performance: '50',
    durability: '50',
    owner: 'RideItUp',
    distanceNft: '6 - 7 km',
  },
  {
    nftSource: require('../../Assets/images/A.jpg'),
    level: '4',
    bikeType: 'LEGENDARY-BIKE',
    bikeId: '#005',
    price: '25 MATIC',
    nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=25e18',
    performance: '60',
    durability: '60',
    owner: 'RideItUp',
    distanceNft: '7 - 8 km',
  },
];


const Middle = ({navigation}) => {
  const { allNftData, buyNft } = useContext(AuthContext);
  if (allNftData === null){
    const nfts = [
      {
        imageUrl: 'https://gateway.pinata.cloud/ipfs/QmPG5PCuwmdZsXpQqUCUd4T7SyVGxcE2rmAFws8RGZrRwP',
        level: '4',
        bikeType: 'LEGENDARY-BIKE',
        bikeId: '#005',
        price: '25 MATIC',
        nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=25e18',
        performance: '60',
        durability: '60',
        ownerId: 'RideItUp',
        distanceNft: '7 - 8 km',
    
      },
      {
        imageUrl: 'https://gateway.pinata.cloud/ipfs/QmaYyQL46XQhH7euG3etRNQnvngk6oiRBZWcfq4dgzgphu',
        level: '3',
        bikeType: 'SUPER-BIKE',
        bikeId: '#006',
        price: '20 MATIC',
        nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=20e18',
        performance: '50',
        durability: '50',
        owner: 'RideItUp',
        distanceNft: '6 - 7 km',
      },
      {
        imageUrl: 'https://gateway.pinata.cloud/ipfs/QmRGrrBdWUPYfam4jg4fiHe8eZ2ogSrbr7YKETQBUh6jdF',
        level: '3',
        bikeType: 'LEGENDARY-BIKE',
        bikeId: '#001',
        price: '15 MATIC',
        nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=15e18',
        performance: '40',
        durability: '40',
        owner: 'RideItUp',
        distanceNft: '5 - 6 km',
      },
    
      // {
      //   imageUrl: require('../../Assets/images/super_bike.jpeg'),
      //   level: '2',
      //   bikeType: 'SUPER-BIKE',
      //   bikeId: '#002',
      //   price: '10 MATIC',
      //   nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=10e18',
      //   performance: '30',
      //   durability: '30',
      //   owner: 'RideItUp',
      //   distanceNft: '4 - 5 km',
      // },
      // {
      //   imageUrl: require('../../Assets/images/C.jpg'),
      //   level: '2',
      //   bikeType: 'LITE-BIKE',
      //   bikeId: '#007',
      //   price: '15 MATIC',
      //   nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=15e18',
      //   performance: '20',
      //   durability: '20',
      //   owner: 'RideItUp',
      //   distanceNft: '3 - 4 km',
      // },
      // {
      //   imageUrl: require('../../Assets/images/lite_bike.jpg'),
      //   level: '1',
      //   bikeType: 'LITE-BIKE',
      //   bikeId: '#003',
      //   price: '5 MATIC',
      //   nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=5e18',
      //   performance: '20',
      //   durability: '20',
      //   owner: 'RideItUp',
      //   distanceNft: '3 - 4 km',
      // },
      // {
      //   imageUrl: require('../../Assets/images/super_bike.jpeg'),
      //   level: '2',
      //   bikeType: 'SUPER-BIKE',
      //   bikeId: '#002',
      //   price: '10 MATIC',
      //   nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=10e18',
      //   performance: '30',
      //   durability: '30',
      //   owner: 'RideItUp',
      //   distanceNft: '4 - 5 km',
      // },
      // {
      //   imageUrl: require('../../Assets/images/B.jpg'),
      //   level: '3',
      //   bikeType: 'SUPER-BIKE',
      //   bikeId: '#006',
      //   price: '20 MATIC',
      //   nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=20e18',
      //   performance: '50',
      //   durability: '50',
      //   owner: 'RideItUp',
      //   distanceNft: '6 - 7 km',
      // },
      // {
      //   imageUrl: require('../../Assets/images/A.jpg'),
      //   level: '4',
      //   bikeType: 'LEGENDARY-BIKE',
      //   bikeId: '#005',
      //   price: '25 MATIC',
      //   nftPurchaseUrl: 'https://metamask.app.link/send/0x23C11Af4E7E3d8c9b79d7E9a6cd24eEE00305c1F@80001?value=25e18',
      //   performance: '60',
      //   durability: '60',
      //   owner: 'RideItUp',
      //   distanceNft: '7 - 8 km',
      // },
    ];
    console.log(nfts, 'nft data');
    return (
      nfts.map((nft, index) => (
      <View>
        <Cycles
          image={nft.imageUrl}
          bikeName={nft.bikeType}
          bikeId={nft.bikeId}
          bikeLevel={nft.level}
          bikePrice={nft.price}
          navigation={navigation}
          buyNft={buyNft}
          nftPurchaseUrl={nft.nftPurchaseUrl}
          owner={nft.ownerId}
          performance={nft.performance}
          durability={nft.durability}
          distanceNft={nft.distanceNft}
        />
      </View>
      ))
    );
  }
  return (
    allNftData.map((nft, index) => (
    <View>
      <Cycles
        id={nft._id}
        image={nft.imageUrl}
        bikeName={nft.bikeType}
        bikeId={nft.bikeId}
        bikeLevel={nft.level}
        bikePrice={nft.price}
        navigation={navigation}
        buyNft={buyNft}
        nftPurchaseUrl={nft.nftPurchaseUrl}
        owner={nft.ownerId}
        performance={nft.performance}
        durability={nft.durability}
        distanceNft={nft.distanceNft}
      />
    </View>
    ))
  );
};

const Cycles = props => {
 return (
  <TouchableOpacity
  onPress = {()=> props.navigation.navigate('Bicycle',  {
    nftImage: props.image,
    bikeId: props.bikeId,
    level: props.bikeLevel,
    performance: props.performance,
    durability: props.durability,
    distanceNft: props.distanceNft,
    owner: props.owner,
    status: 'BUY',
  })}>
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          backgroundColor: '#333333',
          height: 110,
          width: 165,
          marginLeft: 15,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          marginBottom: 15,
        }}>
        <Image
          source={{uri: props.image}}
          style={{
            height: 110,
            width: 165,
            backgroundColor: 'black',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#f1e1cc',
          height: 110,
          width: 165,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 7,
          paddingBottom: 7,
        }}>
        <Text style={{color: '#FF5E0E', fontWeight: '500'}}>
          {props.bikeName}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 30, fontWeight: '900'}}>
            {props.bikeId}
          </Text>
          <View style={{backgroundColor: '#00FF7F', borderRadius: 5, flexDirection:'row'}}>
            <Text
            style={{
              color: 'white',
              padding: 2,
              paddingLeft: 5,
              paddingRight: 5,
              fontWeight: '500',
            }}>
              LEVEL
            </Text>
            <Text
              style={{
                color: 'white',
                padding: 2,
                paddingLeft: 5,
                paddingRight: 5,
                fontWeight: '500',
              }}>
              {props.bikeLevel}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#FF5E0E',
              flexDirection: 'row',
              padding: 10,
              borderRadius: 20,
            }}
            onPress={() =>
              props.buyNft(props.id)
            }>
            <Text
              style={{
                fontWeight: '900',
                color: 'white',
                paddingLeft: 30,
                paddingRight: 30,
              }}>
              {props.bikePrice}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);};

export default Middle;
