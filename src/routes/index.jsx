import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DarkLayout from "../layout/DarkLayout";
import Home from "../views/Home";
import Support from "../views/Support";
import Listing from "../views/Listing"

const AppRoutes = () => {
  return (
    <>
      <Router>
        <DarkLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/phones" element={<Listing />} />
          </Routes>
        </DarkLayout>
      </Router>
    </>
  );
};

export default AppRoutes;
