import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const CardStyle = styled(Card)`
  background-color: white;
`;

const CardCover = styled(Card.Cover)`
  background-color: white;
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <CardStyle elevation={5}>
        <CardCover
          source={{
            uri: photos[0],
          }}
        />
        <Text>{name}</Text>
      </CardStyle>
    </>
  );
};
