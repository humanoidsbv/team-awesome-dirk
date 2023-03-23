import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "../tab-navigator";
import { Modal } from "../../screens/modal";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{
          presentation: "modal",
          cardOverlayEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
