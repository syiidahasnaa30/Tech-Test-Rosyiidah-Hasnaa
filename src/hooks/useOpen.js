import { useState } from "react"

const useOpen =()=>{
    const [open, setOpen] = useState(false)
    const onOpenChange =()=>{
        setOpen((prevOpen)=>!prevOpen)
    }

    return [open, onOpenChange]

}

export default useOpen