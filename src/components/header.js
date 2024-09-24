import {View, Text, StyleSheet} from 'react-native';
import {wp, hp} from '../constants/responsive';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function Header({screen}) {
  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(dayjs());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.text_container}>
        <Text>Today's {date.format('MMM DD')}</Text>
        <Text style={styles.headerText}>{screen}</Text>
      </View>
      <View style={styles.icon_container}>
        <Feather name="search" size={20} color="black" />
        <SimpleLineIcons name="equalizer" size={20} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: wp(100),
    height: hp(10),
    backgroundColor: 'plum',
    paddingHorizontal: wp(5),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  text_container: {
    flexDirection: 'column',
  },
  icon_container: {
    flexDirection: 'row',
    gap: 10,
  },
});
