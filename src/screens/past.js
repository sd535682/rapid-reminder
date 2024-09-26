import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PastEvents = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Past Events</Text>
      </View>
    </View>
  );
};

export default PastEvents;

const styles = StyleSheet.create({});
