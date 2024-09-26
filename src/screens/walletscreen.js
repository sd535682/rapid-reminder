import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UIColors} from '../constants/uielements';

export default function WalletScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: UIColors.backgroundColor}}>
      <Header screen={'Wallet'} />
      <View style={styles.container}>
        <Text style={styles.bodyText}>Wallet Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  bodyText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Mukta-Bold',
  },
});
