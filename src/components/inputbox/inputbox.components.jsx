import React from 'react';
const InputBox = ({handleChange, ...otherProps}) => {
    return ( 
        <input 
            onChange = {handleChange}
            {...otherProps }
        />
     );
}

export default InputBox;