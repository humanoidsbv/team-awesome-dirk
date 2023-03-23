import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SubHeader } from "../../components/sub-header";
import { Button } from "../../components/button";
import { PlusIcon } from "../../components/button/Button.styled";
import { ButtonText } from "../../components/button/Button.styled";
import { theme } from "../../styles/theme.js";
import { getHeaderTitle } from "@react-navigation/elements";
import TeamMemberSvg from "../../assets/icons/team-members.svg";
import TimeSheetsSvg from "../../assets/icons/timesheets.svg";
import { TimeSheets } from "../../screens/time-sheets";
import { TeamMembers } from "../../screens/team-members";
import { Header } from "../../components/header";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.backgroundSecondary,
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            const switchButtonTekst =
              route.name === "Timesheets" ? "New time entry" : "New Humanoid";
            return (
              <SubHeader title={title}>
                <Button onPress={() => navigation.navigate("Modal")}>
                  <PlusIcon />
                  <ButtonText>{switchButtonTekst}</ButtonText>
                </Button>
              </SubHeader>
            );
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
    </>
  );
};
