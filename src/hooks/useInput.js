import { useState } from "react"

function useInput(defaultValue=""){
    const [value, setValue] = useState(defaultValue)

    const onValueChangeHandler = (event) => {
        setValue(event.target.value);
    };
    const setInput=(input)=>{
        setValue(input)
    }
    
    return [value, onValueChangeHandler, setInput];

}
export default useInput