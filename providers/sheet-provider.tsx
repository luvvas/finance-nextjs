"use client"

import { useMountedState } from "react-use"
import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet"
import { EditAccountSheet } from "@/features/accounts/components/edit-account-sheet"

export const SheetProvider = () => {
    const isMounted = useMountedState()

    // const [isMounted, setIsMounted] = useState(false)
    // useEffect(() => {
    //     isMounted(true)
    // }, [])
    
    if(!isMounted) return null;

    return (
        <>
            <NewAccountSheet />
            <EditAccountSheet />
        </>
    )
}