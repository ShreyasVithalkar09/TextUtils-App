import React from "react";

const Alert = (props) => {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        let cap = lower.charAt(0).toUpperCase() + lower.slice(1)
        return cap;
    }
  return (
      <div style={{height: '42px'}}>

      {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}: </strong> {props.alert.msg}
      </div>}
      </div>
    
  );
};

export default Alert;
