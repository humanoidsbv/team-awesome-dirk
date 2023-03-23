import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { View } from "react-native";

import { theme } from "../../styles/theme";
import { CloseIcon } from "./Header.styled";
import { MenuIcon } from "./Header.styled";
import { Pressable } from "react-native";
import { TeamAwesomeSvg } from "./Header.styled";
import * as Styled from "./Header.styled";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handlePress = () => setIsOpen(!isOpen);

  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, backgroundColor: theme.backgroundSecondary }}>
      <Styled.Header>
        <TeamAwesomeSvg />
        <Pressable onPress={handlePress}>{isOpen ? <MenuIcon /> : <CloseIcon />}</Pressable>
      </Styled.Header>
    </View>
  );
};
