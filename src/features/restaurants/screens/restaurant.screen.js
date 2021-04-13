import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { SafeAreaViewContainer } from "../../../components/utils/safe-area.components";
import { ActivityIndicator, Colors } from "react-native-paper";

const SearchView = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.sizes[1]};
`;

const FlatListWithStyle = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeAreaViewContainer>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
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
