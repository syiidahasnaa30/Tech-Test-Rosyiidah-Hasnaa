import { useState } from "react"

const useInput=()=>{
    const [value, setValue] = useState("")

    const onValueChangeHandler = (event) => {
        setValue(event.target.value);
    };
    
    return [value, onValueChangeHandler];

}
export default useInput