import React from 'react';

const validationComponent = (props) => {
    let hint = "Text too short";
    if (props.numberOfSymbols >= 5) {        
        hint = "Text long enought";
    }    
    return (
        <p>{hint}</p>
    )
}

export default validationComponent;

