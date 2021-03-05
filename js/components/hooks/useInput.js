import React, {useState} from "react";

const useInput = (valueOnStart) => {
    const [value, setValue] = useState(valueOnStart);

    return ([
        value, 
        {
            value,
            onChange: e => setValue(e.target.value)
        }
    ])
}

export default useInput;
