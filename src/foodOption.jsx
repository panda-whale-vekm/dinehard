import React, { useState } from "react";

export default function FoodOption(props){
    // deconctruct the props
    const { value, voteFunc, currVote } = props;

    // declare state var to tell if this box is checked
    const [isChecked, setIsChecked] = useState(false);

    // event handler for when a box is checked
        // update isChecked value
    const handleCheck = (e) => {
       setIsChecked(e.target.checked);
        // if it was not checked, tell the parent element it is checked now
       if(e.target.checked){
        voteFunc(value)
       }
   }

    return (
        <div className="foodOption">
            <input className="box"
                type="checkbox"
                key={value}
                checked={currVote === value}
                onChange={handleCheck}
            />

            
                {value}
{/* 
            <h5>{isChecked ? "yes this one is checked" : "no this one is not checked"}</h5> */}

            </div>
    )
}