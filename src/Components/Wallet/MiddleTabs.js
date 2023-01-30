/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState,useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { AuthContext } from '../../context/AuthContext';

const MiddleTabs = (props) => {
  const { tokenWithdrawRequest,refreshWallet, tokens, nfts } = useContext(AuthContext);
  const userTokens = tokens !== null ? tokens : 0;
  const userNfts = nfts !== null ? nfts : 0;
  const [ tokenWithdraw, setTokenWithdraw ] =  useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [transferInWallet, setTransferInWallet] = useState(false);
  const [depositRIU, setDepositRIU] = useState(false);
  return (
    <ScrollView>
      <View>
        <MainContent userTokens={userTokens}/>
        <SecondaryContent />
        <TertiaryContent
          transferInWallet={transferInWallet}
          setTransferInWallet={setTransferInWallet}
          depositRIU={depositRIU}
          setDepositRIU={setDepositRIU}
          tokenWithdraw={tokenWithdraw}
          setTokenWithdraw={setTokenWithdraw}
          tokenWithdrawRequest={tokenWithdrawRequest}
        />
        <BalanceContent name="RIU" value={userTokens} />
        <BalanceContent name="MATIC" value="0" />
        <BalanceContent name="Bicycles" value={userNfts} />
        <ConnectButton
          modalVisible={modalVisible}
          refreshWallet={refreshWallet}
        />
      </View>
    </ScrollView>
  );
};

const MainContent = (props) => (
  <View style={{alignItems: 'center', marginTop: 25}}>
    <Text style={{color: '#FF5E0E', fontSize: 35, fontWeight: '900'}}>
      {props.userTokens} RIU
    </Text>
  </View>
);

const SecondaryContent = () => (
  <View
    style={{
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 7,
      marginLeft: 134,
      marginRight: 134,
      backgroundColor: '#333333',
      paddingVertical: 3,
      borderRadius: 15,
    }}>
    <Text
      style={{
        color: 'white',
        fontFamily: 'Cochin',
      }}>
      connected
    </Text>
  </View>
);

const TertiaryContent = props => {
  // const changeState = () => {
  //   props.setModalVisible(!props.modalVisible);
  //   props.setWithDraw(!props.withDraw);
  // };
  // if (props.withDraw) {
    // return (
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       margin: 20,
    //       marginTop: 35,
    //     }}>
    //     <Text
    //       style={{
    //         color: 'white',
    //         fontSize: 25,
    //         fontWeight: '900',
    //         fontFamily: 'Cochin',
    //       }}>
    //       Wallet
    //     </Text>
    //     <View style={{marginRight: 45, marginTop: 6}}>
    //       <TouchableOpacity style={{paddingLeft: 6}}>
    //         <AntDesign name="link" size={20} color="#F0EAD6" />
    //       </TouchableOpacity>
    //     </View>
    //     <Modal
    //       animationType="fade"
    //       transparent={true}
    //       visible={props.transferInWallet}
    //       onRequestClose={() => {
    //         props.setTransferInWallet(!props.transferInWallet);
    //       }}>
    //       <View style={styles.centeredView}>
    //         <View style={styles.modalView}>
    //           <TouchableOpacity
    //             style={{marginLeft: 220}}
    //             onPress={() =>
    //               props.setTransferInWallet(!props.transferInWallet)
    //             }>
    //             <Entypo name="cross" size={15} />
    //           </TouchableOpacity>
    //           <Text style={{fontSize: 15, fontWeight: '900', color: 'black'}}>
    //             Deposit RIU
    //           </Text>
    //           <Text style={styles.modalText}>RIU</Text>
    //           <TextInput
    //             style={{
    //               alignSelf: 'center',
    //               height: 40,
    //               marginBottom: 8,
    //               marginLeft: 10,
    //               marginRight: 10,
    //               padding: 10,
    //               backgroundColor: 'white',
    //               borderRadius: 10,
    //               borderWidth: 1,
    //             }}
    //             placeholder="RIU"
    //           />
    //           <Pressable style={[styles.button, styles.buttonClose]}>
    //             <Text style={styles.textStyle}>CONFIRM</Text>
    //           </Pressable>
    //         </View>
    //       </View>
    //     </Modal>
    //     <Modal
    //       animationType="fade"
    //       transparent={true}
    //       visible={props.transferCoins}
    //       onRequestClose={() => {
    //         props.setTransferCoins(!props.transferCoins);
    //       }}>
    //       <View style={styles.centeredView}>
    //         <View style={styles.modalView}>
    //           <TouchableOpacity
    //             style={{marginLeft: 220}}
    //             onPress={() => props.setTransferCoins(!props.transferCoins)}>
    //             <Entypo name="cross" size={15} />
    //           </TouchableOpacity>
    //           <Text style={{fontSize: 15, fontWeight: '900', color: 'black'}}>
    //           Withdraw RIU
    //           </Text>
    //           <Text style={styles.modalText}>RIU</Text>
    //           <TextInput
    //             style={{
    //               alignSelf: 'center',
    //               height: 40,
    //               marginBottom: 8,
    //               marginLeft: 10,
    //               marginRight: 10,
    //               padding: 10,
    //               backgroundColor: 'white',
    //               borderRadius: 10,
    //               borderWidth: 1,
    //             }}
    //             placeholder="RIU"
    //           />
    //           <Pressable style={[styles.button, styles.buttonClose]}>
    //             <Text style={styles.textStyle}>CONFIRM</Text>
    //           </Pressable>
    //         </View>
    //       </View>
    //     </Modal>
    //     <View style={{flexDirection: 'row', marginTop: 10}}>
    //       <TouchableOpacity
    //         onPress={() => changeState()}
    //         style={{
    //           marginRight: 35,
    //         }}>
    //         <Text
    //           style={{color: 'white', marginRight: 40, fontFamily: 'Cochin'}}>
    //           Deposit
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // );
  // } else {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
          marginTop: 35,
        }}>
          <Modal
         animationType="fade"
           transparent={true}
           visible={props.transferInWallet}
           onRequestClose={() => {
             props.setTransferInWallet(!props.transferInWallet);
           }}>
           <View style={styles.centeredView}>
             <View style={styles.modalView}>
               <TouchableOpacity
                 style={{marginLeft: 220}}
                 onPress={() =>
                   props.setTransferInWallet(!props.transferInWallet)
                 }>
                 <Entypo name="cross" size={15} />
               </TouchableOpacity>
               <Text style={{fontSize: 15, fontWeight: '900', color: 'black', marginBottom:5}}>
                 Withdraw RIU
               </Text>
               <TextInput
                 style={{
                   alignSelf: 'center',
                   height: 40,
                   marginBottom: 8,
                   marginLeft: 10,
                   marginRight: 10,
                   padding: 10,
                   backgroundColor: 'white',
                   borderRadius: 10,
                   borderWidth: 1,
                }}
                 placeholder="RIU"
                 value={props.tokenWithdraw}
                 onChangeText={text => props.setTokenWithdraw(text)}
               />
               <TouchableOpacity style={[styles.button, styles.buttonClose]}
                onPress={() => props.tokenWithdrawRequest(parseInt(props.tokenWithdraw, 10))}>
                 <Text style={styles.textStyle}>CONFIRM</Text>
               </TouchableOpacity>
             </View>
           </View>
         </Modal>
         <Modal
         animationType="fade"
           transparent={true}
           visible={props.depositRIU}
           onRequestClose={() => {
             props.setDepositRIU(!props.depositRIU);
           }}>
           <View style={styles.centeredView}>
             <View style={styles.modalView}>
               <TouchableOpacity
                 style={{marginLeft: 220}}
                 onPress={() =>
                   props.setDepositRIU(!props.depositRIU)
                 }>
                 <Entypo name="cross" size={15} />
               </TouchableOpacity>
               <Text style={{fontSize: 15, fontWeight: '900', color: 'black', marginBottom:5}}>
                 Deposit RIU
               </Text>
               <TextInput
                 style={{
                   alignSelf: 'center',
                   height: 40,
                   marginBottom: 8,
                   marginLeft: 10,
                   marginRight: 10,
                   padding: 10,
                   backgroundColor: 'white',
                   borderRadius: 10,
                   borderWidth: 1,
                }}
                 placeholder="RIU"
               />
               <Pressable style={[styles.button, styles.buttonClose]}>
                 <Text style={styles.textStyle}>CONFIRM</Text>
               </Pressable>
             </View>
           </View>
         </Modal>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: '900',
            fontFamily: 'Cochin',
          }}>
          Wallet
        </Text>
        <View style={{marginRight: 65, marginTop: 6}}>
          <TouchableOpacity>
            <AntDesign name="link" size={20} color="#F0EAD6" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
          onPress={() => props.setDepositRIU(!props.depositRIU)}>
            <Text
              style={{color: 'white', marginRight: 40, fontFamily: 'Cochin'}}>
              Deposit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.setTransferInWallet(!props.transferInWallet)}>
            <Text style={{color: 'white', fontFamily: 'Cochin'}}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  // }
};

const BalanceContent = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
      backgroundColor: '#333333',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 30,
    }}>
    <Text style={{color: 'white', marginLeft: 10, fontFamily: 'Cochin'}}>
      {props.name}
    </Text>
    <Text style={{color: 'white', marginRight: 10, fontFamily: 'Cochin'}}>
      {props.value}
    </Text>
  </View>
);

const ConnectButton = props => (
  <View>
    {/* <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{marginLeft: 220}}
            onPress={() => props.setModalVisible(!props.modalVisible)}>
            <Entypo name="cross" size={15} />
          </TouchableOpacity>
          <Image style = {{borderRadius:1000}}source={require('../../Assets/images/walletLogo.jpg')} />
          <Text style={styles.modalText}>
            This will open an external wallet (ex: MetaMask). Be sure a wallet
            has been already installed
          </Text>
          <TouchableOpacity style={[styles.button, styles.buttonClose]}
          onPress={() => props.handlePress(props.url)}>
            <Text style={styles.textStyle}>CONNECT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal> */}

    <TouchableOpacity
      style={{
        alignItems: 'center',
        backgroundColor: '#FF5E0E',
        borderRadius: 30,
        margin: 20,
        marginLeft: 50,
        marginRight: 50,
      }}
      onPress={() => props.refreshWallet()}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: '800',
          fontFamily: 'Cochin',
          paddingTop: 9,
          paddingBottom: 9,
        }}>
        REFRESH YOUR WALLET
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    padding: 10,
    paddingLeft: 80,
    paddingRight: 80,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#FF5E0E',
  },
  buttonClose: {
    backgroundColor: '#FF5E0E',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default MiddleTabs;
