import { Divider } from "antd";
import { Route, Routes } from "react-router-dom";
import { CustomHeader, SideMenu } from "src/shared";
import Auxilliary from "src/shared/modules/Auxilliary";
import Cover from "src/shared/modules/Cover";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import NotFound from "./NotFound";
import OTPConfirmation from "./OTPConfirmation";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  const token = false;
  if (token) {
    return (
      <Auxilliary>
        <SideMenu />
        <Auxilliary>
          <Cover >
            <CustomHeader />
            <Divider />
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
        <Route path="/otp" element={<OTPConfirmation />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    )
  }
}

export default Router;