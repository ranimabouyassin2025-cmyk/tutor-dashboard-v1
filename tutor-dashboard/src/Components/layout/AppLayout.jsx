import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="app-layout dashboard">
      <SideBar />

      <div className="app-layout__content dashboard-content">
        <Header />
           
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
