import React, {useState, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ConfirmModal from './modal';
import {UIColors} from '../constants/uielements';

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
      <View>
        <Image
          source={{
            uri: 'https://fastly.picsum.photos/id/59/200/200.jpg?hmac=q9DbuoFh1L_NWnGk3AGdzuEOlg5bBW4JmBSgWmQdT74',
          }}
          resizeMethod="cover"
          height={200}
          width={150}
          style={{borderRadius: 15}}
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.name}>{event.name}</Text>
        <Text style={styles.time}>
          {event.time} - {event.duration}
        </Text>
        <Text style={styles.instructor}>Instructor: {event.username}</Text>
        <Text style={styles.price}>Price: {event.price}</Text>
        <Text style={styles.capacity}>Capacity: {event.capacity}</Text>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleCancelPress}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <ConfirmModal
          visible={modalVisible}
          onConfirm={handleConfirmCancel}
          onCancel={handleCancelModal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  text_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 5,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Mukta-Bold',
    color: 'black',
  },
  time: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Mukta-Regular',
  },
  instructor: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Mukta-Regular',
  },
  price: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Mukta-Regular',
  },
  capacity: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Mukta-Regular',
  },
  cancelButton: {
    backgroundColor: UIColors.buttonColor,
    borderRadius: 5,
    padding: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'red',
    fontFamily: 'Mukta-Bold',
  },
});

export default React.memo(EventCard);
