import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DateChip from '../components/datechips';
import EventCard from '../components/cards';

const API_URL = 'https://mocki.io/v1/e3a3b255-3018-4abf-b8b4-a606978ffaa4';

export default function Upcoming() {
  const [events, setEvents] = useState({});
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setEvents(data.events[0]);

      // Extract dates
      const extractedDates = Object.keys(data.events[0]);
      setDates(extractedDates);

      // Set the first date as selected by default
      if (extractedDates.length > 0) {
        setSelectedDate(extractedDates[0]);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDateSelect = useCallback(date => {
    setSelectedDate(date);
  }, []);

  const renderEventCard = useCallback(
    ({item}) => <EventCard event={item} />,
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={dates}
        renderItem={({item}) => (
          <DateChip
            date={item}
            isSelected={item === selectedDate}
            onSelect={handleDateSelect}
          />
        )}
        keyExtractor={item => item}
        style={styles.chipList}
        showsHorizontalScrollIndicator={false}
      />
      {selectedDate && (
        <FlatList
          data={events[selectedDate]}
          renderItem={renderEventCard}
          keyExtractor={(item, index) => `${selectedDate}-${index}`}
          style={styles.cardList}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chipList: {
    maxHeight: 50,
    marginBottom: 10,
  },
  cardList: {
    flex: 1,
  },
});
