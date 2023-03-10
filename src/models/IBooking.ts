import { ICustomer } from "./ICustomer";

export interface IBooking {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number | undefined;
  customer: ICustomer;
}
