import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingEvents from '../screens/upcoming';
import PastEvents from '../screens/past';
import {LogBox} from 'react-native';
import {UIColors} from '../constants/uielements';

LogBox.ignoreLogs([
  'Warning: A props object containing a "key" prop is being spread into JSX',
]);

const TopBar = createMaterialTopTabNavigator();

export default function TopBarNavigation() {
  return (
    <TopBar.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          height: 0,
          backgroundColor: UIColors.tabColor,
        },
        tabBarStyle: {
          backgroundColor: UIColors.backgroundColor,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Mukta-Bold',
        },
        tabBarItemStyle: {
          backgroundColor: UIColors.tabColor,
          borderRadius: 10,
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginHorizontal: 8,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#333',
      }}>
      <TopBar.Screen name="Upcoming" component={UpcomingEvents} />
      <TopBar.Screen name="Past" component={PastEvents} />
    </TopBar.Navigator>
  );
}
