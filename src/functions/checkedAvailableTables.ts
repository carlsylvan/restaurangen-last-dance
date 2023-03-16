import { IAvailableTime } from "../models/IAvailableTime";
import { IBookingsAdmin } from "../models/IBookingsAdmin";
export const checkedAvailableTables = (bookings: IBookingsAdmin[], date: string, numberOfGuests: number)=>{
    let numberOfTablesAtFive = 0;
    let numberOfTablesAtNine = 0;
    let tables = Math.ceil(numberOfGuests/6);
      let availableTablesList:IAvailableTime[] = [{bookingTime:"17:00", isAvailable:true}, {bookingTime:"21:00", isAvailable:true}];
      bookings.map((item)=>{
      if(item.date===date){
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