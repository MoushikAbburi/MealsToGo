import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { SafeAreaViewContainer } from "../../../components/utils/safe-area.components";

const SearchView = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.sizes[1]};
`;

const FlatListWithStyle = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeAreaViewContainer>
      <SearchView>
        <Searchbar />
      </SearchView>
      <FlatListWithStyle
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurants={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaViewContainer>
  );
};
