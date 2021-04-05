import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components/native";

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchView = styled.View`
  background-color: white;
  padding: 16px;
`;

const ListView = styled.View`
  background-color: blue;
  flex: 1;
  padding: 16px;
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
