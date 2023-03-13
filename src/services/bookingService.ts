import axios from "axios";
import { IApiResponse } from "../models/IApiResponse";
import { IBookedTable } from "../models/IBookedTable";
import { IBooking } from "../models/IBooking";
import { IBookingCustomer } from "../models/IBookingCustomer";
import { IBookingsAdmin } from "../models/IBookingsAdmin";
import { ICustomer } from "../models/ICustomer";

const RESTAURANT_ID = "6408a12376187b915f68e171";
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
  let response = await axios.post(`${API_URL}/booking/create`, booking);
  return response.data;
};

export const getBookings = async () => {
  let response = await axios.get<IBookingsAdmin[]>(
    `${API_URL}/booking/restaurant/${RESTAURANT_ID}`
  );
  return response.data;
};

export const getBookedTableById = async (id: string): Promise<IApiResponse> => {
  try {
    let response = await axios.get<IBookedTable[]>(`${API_URL}/booking/` + id);
    return { bookedTable: response.data[0], error: "" };
  } catch {
    return { error: "Ett fel har inträffat" };
  }
};

export const getCustomerById = async (id: string): Promise<IApiResponse> => {
  try {
    let response = await axios.get<IBookingCustomer[]>(
      `${API_URL}/customer/` + id
    );
    return { bookingCustomer: response.data[0], error: "" };
  } catch {
    return { error: "Ett fel har inträffat" };
  }
};

export const deleteBookingById = async (id: string) => {
  let response = await axios.delete<IBookedTable>(
    `${API_URL}/booking/delete/` + id
  );
  console.log(response.status);
};

export const updateBookingById = async (id: string) => {
  let response = await axios.put<IBookedTable>(
    `${API_URL}/booking/update/` + id
  );
  console.log(response.status);
};

export const updateCustomerById = async (id: string) => {
  let response = await axios.put<IBookingCustomer>(
    `${API_URL}/customer/update/` + id
  );
  console.log(response.status);
};
