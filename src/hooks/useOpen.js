import { useState } from "react"

const useOpen =(defaultValue=false)=>{
    const [open, setOpen] = useState(defaultValue)
    const onOpenChange =()=>{
        setOpen((prevOpen)=>!prevOpen)
    }

    return [open, onOpenChange]

}

export default useOpen