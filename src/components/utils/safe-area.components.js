import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
