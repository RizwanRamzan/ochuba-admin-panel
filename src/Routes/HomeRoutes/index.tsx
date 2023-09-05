import { Navigate, Route, Routes } from "react-router-dom";
import Sports from "../../pages/Trading/Sports";
import News from "../../pages/Trading/News";
import Politics from "../../pages/Trading/Politics";
import Finance from "../../pages/Trading/Finance";
import Media from "../../pages/Trading/Media";


const HomeRoutes = () => {

    

    return (
        <Routes>
          
            <Route path={"*" } element={<Navigate to="/admin/trading/sports" replace />} />
            {/* Dashboard */}
            <Route path="/admin/trading/sports" element={<Sports />} />
            <Route path="/admin/trading/news" element={<News />} />
            <Route path="/admin/trading/politics" element={<Politics />} />
            <Route path="/admin/trading/finance" element={<Finance />} />
            <Route path="/admin/trading/media" element={<Media />} />


        </Routes>

    )
}

export default HomeRoutes