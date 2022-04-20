import PropTypes from "prop-types";
import React, {  useRef, useState } from "react";
import PinItem from "./PinItem";

function Inputboxes({ length, perbox, onChange }) {
  const [values, setvalues] = useState(new Array(length).fill(""));
  let ele = useRef(new Array(length).fill(0));
  const handleChange = (value, index) => {
    const val = [...values];

    val[index] = value;
    setvalues(val);
    if (value.length > 0 && value.length == perbox && index < length - 1) {
      ele.current[index + 1].focus();
    }
    onChange(val);
  };

 

  const handleBackspaceChange = (value, index) => {
      if(index>0){

        ele.current[index - 1].focus();
      }
    const val = [...values];

    val[index] = value;
    setvalues(val);
    
    onChange(val);
  };


  const handlePaste=(e)=>{
      e.preventDefault()
     let  arr=e.clipboardData.getData("Text")
   let x=arr.split("").map(Number)
    if(x.length==length){
    setvalues(x)
    onChange(x)
    }
    else{
        return 
    }


  }

  return (
    <div onPaste={handlePaste}>
      <h1>label</h1>

      {values.map((items, index) => (
        <PinItem
          key={index}
          onChange={(v) => handleChange(v, index)}
          onBackspace={(v) => handleBackspaceChange(v, index)}
          ref={(x) => {
            ele.current[index] = x;
          }}
          max={perbox}
        />
      ))}
    </div>
  );
}

Inputboxes.propTypes = {
  length: PropTypes.number,
  perbox: PropTypes.number,
  label: PropTypes.string,
};
Inputboxes.defaultProps = {
  label: "label",
  perbox: 1,
};
export default Inputboxes;
