import axios from "axios";
import { IBooking } from "../models/IBooking";

const API_URL = "https://school-restaurant-api.azurewebsites.net";

// export const getRestaurant = async () => {
//   let response = await axios.post(
//     "https://school-restaurant-api.azurewebsites.net/restaurant/create",
//     {
//       name: "Restaurangen Last Dance",
//       address: {
//         street: "Stopvägen 67",
//         zip: "168 35",
//         city: "Bromma",
//       },
//     }
//   );
//   return response.data;
// };

export const sendBooking = async (booking: IBooking) => {
  let response = await axios.post(`${API_URL}/booking/create`);
  return response.data;
};
