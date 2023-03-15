import { useState } from "react";
import { BookingTimeWrapper } from "../styled/Wrappers";

interface IBookingTime {
    bookingTime: string,
    isSelected: boolean,
}

interface ISelectBookingTimeProps {
    handleBookingTime(bookingTime:string):void,
    firstTime:boolean,
    secondTime:boolean
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
    console.log(props.firstTime);
    
    const html = time.map((item,i)=>{
        if(item.bookingTime==="17:00"){
            if(props.firstTime)
                return (
                    <BookingTimeWrapper key={i} onClick={()=>{handleClick(item)}} selected = {item.isSelected} isAvailable = {props.firstTime}>
                        {item.bookingTime}
                    </BookingTimeWrapper>
            )
            else {
                return (
                    <BookingTimeWrapper key={i} selected = {false} isAvailable = {props.firstTime}>
                        {item.bookingTime}
                    </BookingTimeWrapper>  
                )
            }

        }
        else if(item.bookingTime==="21:00"){
            if(props.secondTime)
                return (
                    <BookingTimeWrapper key={i} onClick={()=>{handleClick(item)}} selected = {item.isSelected} isAvailable = {props.secondTime}>
                        {item.bookingTime}
                    </BookingTimeWrapper>
                )
            else {
                return (
                    <BookingTimeWrapper key={i}  selected = {false} isAvailable = {props.secondTime}>
                        {item.bookingTime}
                    </BookingTimeWrapper>
                )
            }

        }
    })
    return (
        <>
            {html}
        </>
    )
}