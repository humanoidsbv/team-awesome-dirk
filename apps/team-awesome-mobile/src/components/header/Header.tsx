import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { CloseIcon } from "./Header.styled";
import { MenuIcon } from "./Header.styled";
import { Pressable } from "react-native";
import { TeamAwesomeSvg } from "./Header.styled";
import * as Styled from "./Header.styled";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handlePress = () => setIsOpen(!isOpen);

  return (
    <SafeAreaView>
      <Styled.Header>
        <TeamAwesomeSvg />
        <Pressable onPress={handlePress}>{isOpen ? <MenuIcon /> : <CloseIcon />}</Pressable>
      </Styled.Header>
    </SafeAreaView>
  );
};
