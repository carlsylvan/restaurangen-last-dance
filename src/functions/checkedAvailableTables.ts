import { IBooking } from "../models/IBooking";
import { IBookingsAdmin } from "../models/IBookingsAdmin";
export interface IAvailableTime  {
  bookingTime: string,
  isAvailable: boolean
}
export const checkedAvailableTables = (bookings: IBookingsAdmin[], booking: IBooking)=>{
    let numberOfTables = 0;
  
      bookings.map((item)=>{
      if(item.date===booking.date){
         if(item.time===booking.time){
          numberOfTables=numberOfTables+Math.ceil(item.numberOfGuests/6);
        }
      }
      });
    if(numberOfTables+Math.ceil(booking.numberOfGuests/6)>2){
      return false
    }
    else {
      return true
    }
  }
export const checkedAvailableTablesTest = (bookings: IBookingsAdmin[], booking: IBooking)=>{
    let numberOfTablesAtFive = 0;
    let numberOfTablesAtNine = 0;
    let tables = Math.ceil(booking.numberOfGuests/6);
      let availableTablesList:IAvailableTime[] = [{bookingTime:"17:00", isAvailable:true}, {bookingTime:"21:00", isAvailable:true}];
      bookings.map((item)=>{
      if(item.date===booking.date){
         if(item.time==="17:00"){
          numberOfTablesAtFive=numberOfTablesAtFive+Math.ceil(item.numberOfGuests/6);
         }
         else if(item.time==="21:00"){
          numberOfTablesAtNine=numberOfTablesAtNine+Math.ceil(item.numberOfGuests/6);
         }
        }
      }
      );
      ((numberOfTablesAtFive+tables)>2) ? availableTablesList[0].isAvailable=false : availableTablesList[0].isAvailable=true;
      ((numberOfTablesAtNine+tables)>2) ? availableTablesList[1].isAvailable=false : availableTablesList[1].isAvailable=true;

      
      return availableTablesList;
  }