import { useState } from "react"
import useOpen from "./useOpen"

const useSnackBar=()=>{
    const [open, onOpenChange ] = useOpen(false)
    const [messgeSnackBar, setMessageSnackBar] = useState("")
    const [severity, setSeverity] = useState("error")

    const setSnackBar =({message, severity})=>{
        setSeverity(severity)
        setMessageSnackBar(message)
        onOpenChange()
    }
    return [open, messgeSnackBar, severity, setSnackBar, onOpenChange]
}

export default useSnackBar