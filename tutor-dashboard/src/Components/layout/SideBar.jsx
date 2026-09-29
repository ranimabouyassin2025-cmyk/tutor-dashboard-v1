import { NavLink } from "react-router";

function SideBar() {
  return (
    <aside className="app-sidebar sidebar">

      <h2 className="sidebar__heading">Tutor Flow</h2>

      <nav className="sidebar__navigation navigation">
             
        <NavLink className="sidebar__link" to="/" end>
          Dashboard
        </NavLink>

        <NavLink className="sidebar__link" to="/students">
          Students
        </NavLink>
        <NavLink className="sidebar__link" to="/lessons">
        Lessons
        </NavLink>

      </nav>

    </aside>
  );
}

export default SideBar;
