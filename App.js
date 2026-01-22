import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./src/navigation/TabNavigator";
import DrawerNavigation from "./src/navigation/DrawerNavigation";


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}

