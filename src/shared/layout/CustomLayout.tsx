import { Outlet } from "react-router-dom";


const CustomLayout = () => {
  return (
    <div>
      Sidebar
      TopNav
      <Outlet />
    </div>
  )
}

export default CustomLayout