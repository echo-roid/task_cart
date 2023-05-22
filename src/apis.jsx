import axios from "axios";

export function getData() {
    return axios
      .get(`https://dummyjson.com/products`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }
  