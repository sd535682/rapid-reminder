import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {UIColors} from '../constants/uielements';

const DateChip = React.memo(({date, isSelected, onSelect}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <TouchableOpacity
      style={[styles.chip, isSelected && styles.selectedChip]}
      onPress={() => onSelect(date)}>
      <Text style={[styles.chipText, isSelected && styles.selectedChipText]}>
        {formattedDate}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  selectedChip: {
    backgroundColor: UIColors.tabColor,
  },
  chipText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Mukta-Regular',
  },
  selectedChipText: {
    color: UIColors.backgroundColor,
  },
});

export default DateChip;
