import { Link, Outlet } from "react-router-dom";


const CustomLayout = () => {
  return (
    <div>
      <Link to="/login">LOGIN</Link>
      <Outlet />
    </div>
  )
}

export default CustomLayout