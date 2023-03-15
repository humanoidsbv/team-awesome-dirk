import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import React from "react";

import { Header } from "../components/header";
import { SubHeader } from "../components/sub-header";
import { TeamMembers } from "../screens/team-members/TeamMembers";
import { theme } from "../styles/theme";
import { TimeSheets } from "../screens/time-sheets/Timesheets";
import TimeSheetsSvg from "../assets/icons/timesheets.svg";
import TeamMemberSvg from "../assets/icons/team-members.svg";

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: theme.backgroundSecondary,
              header: ({ navigation, route, options }) => {
                return <SubHeader />;
              },
            }}
          >
            <Tab.Screen
              options={{ tabBarIcon: TimeSheetsSvg }}
              name="Timesheets"
              component={TimeSheets}
            />
            <Tab.Screen
              options={{ tabBarIcon: TeamMemberSvg }}
              name="Team members"
              component={TeamMembers}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
