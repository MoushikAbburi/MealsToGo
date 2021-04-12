import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  Children,
} from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: [1, 2, 3, 4, 5] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
