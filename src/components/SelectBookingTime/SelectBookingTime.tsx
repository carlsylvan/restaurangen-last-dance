import { useState } from "react";
import { BookingTimeWrapper } from "../styled/Wrappers";

interface IBookingTime {
    bookingTime: string,
    isSelected: boolean,
}

interface ISelectBookingTimeProps {
    handleBookingTime(bookingTime:string):void,
    isTableAvailable:boolean,

}

export const SelectBookingTime = (props:ISelectBookingTimeProps) => {
    const [time, setTime] = useState<IBookingTime[]>([
        {bookingTime: "17:00", isSelected:false},
        {bookingTime: "21:00", isSelected:false},
    ]);
    const handleClick = (item:IBookingTime) => {
        props.handleBookingTime(item.bookingTime);
        let options = [...time];
        options.map((o)=>o.isSelected=false);
        options[options.findIndex((o)=>o.bookingTime===item.bookingTime)].isSelected=
        !options[options.findIndex((o)=>o.bookingTime===item.bookingTime)].isSelected;
    setTime(options);
    }
   
    
    const html = time.map((item,i)=>{
        return (
            <BookingTimeWrapper key={i} onClick={()=>{handleClick(item)}} selected = {item.isSelected} isAvailable = {props.isTableAvailable}>
                {item.bookingTime}
            </BookingTimeWrapper>
        )
    })
    return (
        <>
            {html}
        </>
    )
}