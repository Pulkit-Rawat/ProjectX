import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DarkLayout from "../layout/DarkLayout";
import Home from "../views/Home";
import Listing from "../views/Listing"
import Support from "../views/Support";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <DarkLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/shopping" element={<Listing />} />
          </Routes>
        </DarkLayout>
      </Router>
    </>
  );
};

export default AppRoutes;
