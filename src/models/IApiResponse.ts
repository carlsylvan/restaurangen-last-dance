import { IBookedTable } from "./IBookedTable";
import { IBookingCustomer } from "./IBookingCustomer";

export interface IApiResponse {
  bookedTable?: IBookedTable;
  error: string;
  bookingCustomer?: IBookingCustomer
}
