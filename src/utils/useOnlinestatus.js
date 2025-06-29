import { useEffect, useState } from "react";

const useOnlinestatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)
    //  check if online 
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, [])
    //  boolean value
    return onlineStatus;
}
export default useOnlinestatus;