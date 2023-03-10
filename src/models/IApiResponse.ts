import { IBookedTable } from "./IBookedTable";

export interface IApiResponse {
  bookedTable?: IBookedTable;
  error: string;
}
