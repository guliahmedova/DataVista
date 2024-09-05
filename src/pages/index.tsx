// import { useAppSelector } from "@/redux/store";
import { CustomHeader, RenderIf, SideMenu, Spinner } from "@/shared";
import Auxilliary from "@/shared/modules/Auxilliary";
import Cover from "@/shared/modules/Cover";
import { ConfigProvider, theme } from "antd";
import { Suspense, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import ForgotPassword from "./ForgotPassword";
// import Login from "./Login";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [primary, setPrimary] = useState('#1554ad');
  // const { access_token } = useAppSelector(state => state.auth);

  return (
    <>
      <RenderIf conditions={true} >
        <ConfigProvider theme={
          {
            algorithm: isDarkMode ? defaultAlgorithm : darkAlgorithm,
            token: {
              colorPrimary: primary,
              colorError: "#ff4d4f",
              colorInfo: "#1677ff",
              colorSuccess: "#52c41a",
              colorWarning: "#faad14",
              motion: true,
              colorLinkActive: primary,
              linkDecoration: 'none',
              colorLink: primary,
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
                <CustomHeader
                  setIsDarkMode={setIsDarkMode}
                  setPrimary={setPrimary}
                  isDarkMode={isDarkMode}
                  primary={primary}
                />
                <Suspense fallback={<Spinner />}>
                  <PrivateRouter />
                </Suspense>
              </Cover>
            </Auxilliary>
          </Auxilliary>
        </ConfigProvider>
      </RenderIf>

      {/* <RenderIf conditions={!access_token}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </RenderIf> */}
    </>
  )
};

export default Router;