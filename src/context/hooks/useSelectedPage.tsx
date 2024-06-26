import { useContext } from "react"
import { SelectedIndexContext } from "../SelectedPageContext"

export const useSelectedPage = () => {
    const context = useContext(SelectedIndexContext);

    if (context === null) {
        throw new Error("error")
    }
    return context
}