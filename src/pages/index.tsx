import { ConfigProvider, Divider, theme } from "antd";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CustomHeader, RenderIf, SideMenu } from "src/shared";
import Auxilliary from "src/shared/modules/Auxilliary";
import Cover from "src/shared/modules/Cover";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import NotFound from "./NotFound";
import OTPConfirmation from "./OTPConfirmation";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [primary, setPrimary] = useState('#1554ad');
  const token = true;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <RenderIf
      conditions={token}
      renderelse={
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTPConfirmation />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      }
    >
      <ConfigProvider theme={
        {
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: primary,
            colorError: "#ff4d4f",
            colorInfo: "#1677ff",
            colorSuccess: "#52c41a",
            colorWarning: "#faad14",
            motion: true,
            colorLinkActive: primary,
            linkDecoration: 'none',
            colorLink: primary
          },
          components: {
            Menu: {
              itemActiveBg: 'transparent',
            }
          }
        }}>
        <Auxilliary>
          <SideMenu />
          <Auxilliary>
            <Cover >
              <CustomHeader setIsDarkMode={setIsDarkMode} setPrimary={setPrimary} primary={primary} background={colorBgContainer} />
              <Divider />
              <PrivateRouter />
            </Cover>
          </Auxilliary>
        </Auxilliary>
      </ConfigProvider>
    </RenderIf>
  )
};

export default Router;