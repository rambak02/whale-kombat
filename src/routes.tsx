import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage/MainPage"
import { MinePage } from "./pages/MinePage.tsx/MinePage"
import { constRoutes } from "./paths"
import { FriendsPage } from "./pages/FriendsPage/FriendsPage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={constRoutes.HOME} element={<MainPage />}/>
            <Route path={constRoutes.MINE} element={<MinePage />}/>
            <Route path={constRoutes.FRIENDS} element= {<FriendsPage />} />
        </Routes>
    )
}