import { useEffect, useState } from "react";
import { AmountGuestsNumberWrapper } from "../styled/Wrappers";


interface INumberOfGuest {
    numberOfGuests: number,
    isSelected: boolean,
}

interface ISelectGuestsAmountProps {
    handleGuestsNum(num:number):void,
}

export const SelectGuestsAmount = (props:ISelectGuestsAmountProps) => {
    const [optionsList, setOptionsList] = useState<INumberOfGuest[]>([
        // {numberOfGuests:1, isSelected:true},
        // {numberOfGuests:2, isSelected:false},
        // {numberOfGuests:3, isSelected:false},
        // {numberOfGuests:4, isSelected:false},
        // {numberOfGuests:5, isSelected:false},
        // {numberOfGuests:6, isSelected:false},
        // {numberOfGuests:7, isSelected:false},
        // {numberOfGuests:8, isSelected:false},
        // {numberOfGuests:9, isSelected:false},
        // {numberOfGuests:10, isSelected:false},
        // {numberOfGuests:11, isSelected:false},
        // {numberOfGuests:12, isSelected:false},
    ]);
    // const [isCreated, setIsCreated] = useState<boolean>(false);
    

    useEffect(()=>{
        // if(!isCreated){
            let temp: INumberOfGuest[] = [];
            for(let i=0; i<12; i++){
                if(i === 0) {
                    temp.push({numberOfGuests: i+1, isSelected: false})

                }
                else {
                    temp.push({numberOfGuests: i+1, isSelected: false})
                    
                }
                
            }
            // setIsCreated(true);
        // }

        setOptionsList(temp);
    }, [])

    const handleClick = (item:INumberOfGuest) => {
        props.handleGuestsNum(item.numberOfGuests);
        let options = [...optionsList];
        options.map((item)=>item.isSelected=false);
        options[options.findIndex((o)=>o.numberOfGuests===item.numberOfGuests)].isSelected=
            !options[options.findIndex((o)=>o.numberOfGuests===item.numberOfGuests)].isSelected;
        setOptionsList(options);
    
    }

    
    let html = optionsList.map((item, i)=>{
        return (
            <AmountGuestsNumberWrapper 
                key={i} 
                onClick={()=>{handleClick(item)}}
                selected = {item.isSelected}
            >{item.numberOfGuests}</AmountGuestsNumberWrapper>
        )
    }
    )
    return <>{html}</>
}