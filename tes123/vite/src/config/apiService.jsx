import axios from "axios";

export const baseAPI = axios.create({
    baseURL: "https://6430ec23d4518cfb0e576ee4.mockapi.io/",
});

export const sheetDBAPI = axios.create({
    baseURL: "https://sheetdb.io/api/v1/8jombd5zduabl",
})

export const uploaderAPI = axios.create({
    baseURL: "https://api.cloudinary.com/v1_1",
  });