import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Location Not Found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results }) => {
  const mappedResult = results.map((restaurants) => {
    restaurants.photos = restaurants.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurants,
      isOpenNew:
        restaurants.opening_hours && restaurants.opening_hours.open_now,
      isClosedTemporarily: restaurants.business_status,
    };
  });
  return camelize(mappedResult);
};
