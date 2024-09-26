import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Header screen={'Home'} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Home Screen
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
