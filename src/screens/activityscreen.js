import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/header';
import TopBarNavigation from '../navigation/topbarnavigation';
import {UIColors} from '../constants/uielements';

export default function ActivityScreen() {
  return (
    <SafeAreaView style={styles.screen_container}>
      <Header screen={'Activity'} />
      <View style={styles.container}>
        <TopBarNavigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen_container: {
    flex: 1,
    backgroundColor: UIColors.backgroundColor,
  },
  container: {
    flex: 1,
  },
});
