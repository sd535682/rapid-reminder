import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ConfirmModal from './modal';

const EventCard = ({event, onCancel}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancelPress = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleConfirmCancel = useCallback(() => {
    setModalVisible(false);
    onCancel(event);
  }, [event, onCancel]);

  const handleCancelModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{event.name}</Text>
      <Text style={styles.time}>
        {event.time} - {event.duration}
      </Text>
      <Text style={styles.instructor}>Instructor: {event.username}</Text>
      <Text style={styles.price}>Price: {event.price}</Text>
      <Text style={styles.capacity}>Capacity: {event.capacity}</Text>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
      <ConfirmModal
        visible={modalVisible}
        onConfirm={handleConfirmCancel}
        onCancel={handleCancelModal}
      />
    </View>
  );
};

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
    marginBottom: 8,
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 5,
    padding: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default React.memo(EventCard);
