import { IBooking } from "../models/IBooking";
import { IBookingsAdmin } from "../models/IBookingsAdmin";

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