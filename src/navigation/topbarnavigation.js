import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingEvents from '../screens/upcoming';
import PastEvents from '../screens/past';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Warning: A props object containing a "key" prop is being spread into JSX',
]);

const TopBar = createMaterialTopTabNavigator();

export default function TopBarNavigation() {
  return (
    <TopBar.Navigator
      key={true}
      screenOptions={{
        // tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'plum', borderColor: 'red'},
        lazy: true,
        swipeEnabled: true,
        tabBarIndicator: () => null,
      }}>
      <TopBar.Screen
        name="Upcoming"
        component={UpcomingEvents}
        options={{
          tabBarLabel: 'Upcoming',
        }}
      />
      <TopBar.Screen
        name="Past"
        component={PastEvents}
        options={{tabBarLabel: 'Past'}}
      />
    </TopBar.Navigator>
  );
}
