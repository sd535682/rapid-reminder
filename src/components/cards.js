import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EventCard = React.memo(({event}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{event.name}</Text>
      <Text style={styles.time}>
        {event.time} - {event.duration}
      </Text>
      <Text style={styles.instructor}>Instructor: {event.username}</Text>
      <Text style={styles.price}>Price: {event.price}</Text>
      <Text style={styles.capacity}>Capacity: {event.capacity}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  time: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  instructor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  capacity: {
    fontSize: 14,
    color: '#666',
  },
});

export default EventCard;
