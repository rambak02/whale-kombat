import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage/MainPage"
import { MinePage } from "./pages/MinePage/MinePage"
import { constRoutes } from "./paths"
import { FriendsPage } from "./pages/FriendsPage/FriendsPage"
import { EarnPage } from "./pages/EarnPage/EarnPage"
import { AirdropPage } from "./pages/AirdropPage/Airdrop"
import { CryptoCompaniesPage } from "./pages/CryptoCompaniesPage/CryptoCompaniesPage"
import { BoostPage } from "./pages/BoostPage/BoostPage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={constRoutes.HOME} element={<MainPage />}/>
            <Route path={constRoutes.MINE} element={<MinePage />}/>
            <Route path={constRoutes.FRIENDS} element= {<FriendsPage />} />
            <Route path={constRoutes.EARN} element={<EarnPage />}/>
            <Route path={constRoutes.AIRDROP} element={<AirdropPage />}/>
            <Route path={constRoutes.CRYPTOCOMPANIES} element={<CryptoCompaniesPage />}/>
            <Route path={constRoutes.BOOST} element={<BoostPage />}/>
        </Routes>
    )
}