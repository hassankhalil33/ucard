import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import TabNavigationScreen from "./TabNavigation";
import WelcomeStackScreen from "./WelcomeStack";

const NavigationSwitcher = () => {
  const { logged } = useContext(UserContext);

  return (
    logged ? <TabNavigationScreen /> : <WelcomeStackScreen />
  )
}

export default NavigationSwitcher
