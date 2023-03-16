import { Outlet, Link } from "react-router-dom";
import '../styles/Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/spring2023/cscn408/asgn02_app04/">Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;