import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header screen={'Profile'} />
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
