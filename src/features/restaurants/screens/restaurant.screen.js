import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components/native";

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchView = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.sizes[1]};
`;

const ListView = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  padding: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantScreen = () => (
  <SafeAreaViewContainer>
    <SearchView>
      <Searchbar />
    </SearchView>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </SafeAreaViewContainer>
);
