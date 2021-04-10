import React from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
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

const FlatListWithStyle = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

export const RestaurantScreen = () => (
  <SafeAreaViewContainer>
    <SearchView>
      <Searchbar />
    </SearchView>
    <FlatListWithStyle
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeAreaViewContainer>
);
