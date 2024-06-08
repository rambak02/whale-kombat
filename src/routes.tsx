import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage/MainPage"
import { MinePage } from "./pages/MinePage.tsx/MinePage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/mine" element={<MinePage />}/>
        </Routes>
    )
}