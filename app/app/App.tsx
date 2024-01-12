"use client"
import { useAppStore } from "@/store/store"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import useStore from "@/store/useStore"

export default function App() {
    const currentDay = useStore(useAppStore, (state) => state.currentDay)
    const addTwoDay = useAppStore((state) => state.addTwoDay)
    return (
        <>
            {currentDay && format(currentDay, 'MM/dd/yyyy')}
            <Button onClick={addTwoDay}>Add two day</Button>
        </>
    )
}
