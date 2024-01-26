import { Route, Routes } from "react-router-dom";
import { CustomHeader, SideMenu } from "src/shared";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import NotFound from "./NotFound";
import PrivateRouter from "./PrivateRouter";
import Cover from "src/shared/modules/Cover";
import Auxilliary from "src/shared/modules/Auxilliary";

const Router = () => {
  const token = true;
  if (token) {
    return (
      <Auxilliary>
        <CustomHeader />
        <Auxilliary>
          <SideMenu />
          <Cover >
            <PrivateRouter />
          </Cover>
        </Auxilliary>
      </Auxilliary>
    )
  } else {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    )
  }
}

export default Router