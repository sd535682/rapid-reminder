import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UIColors} from '../constants/uielements';

const PastEvents = () => {
  return (
    <View style={{flex: 1, backgroundColor: UIColors.backgroundColor}}>
      <View style={styles.container}>
        <Text style={styles.text}>Past Events</Text>
      </View>
    </View>
  );
};

export default PastEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Mukta-Bold',
    color: 'black',
    fontSize: 20,
  },
});
