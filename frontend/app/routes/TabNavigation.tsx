import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const TabNavigation = createBottomTabNavigator();
const TabNavigationScreen = () => {
  return (
    <TabNavigation.Navigator>

      <TabNavigation.Screen
        name={"home"}
        component={HomeScreen}
      />
      <TabNavigation.Screen
        name={"notifications"}
        component={HomeScreen}
      />
      <TabNavigation.Screen
        name={"contacts"}
        component={HomeScreen}
      />
      <TabNavigation.Screen
        name={"cards"}
        component={HomeScreen}
      />

    </TabNavigation.Navigator>
  )
}

export default TabNavigationScreen
