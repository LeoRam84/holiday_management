import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout() {
  const { pathname } = useLocation()

  return (
    <main>
      <h1>Holiday Plans:</h1>
      <div className="tabs">
        <Link 
          to="/items"
          className={`tab ${pathname === "/items" ? "active" : ""}`}
        >
          Show Holiday Plans 
        </Link>
        <Link 
          to="/items/new"
          className={`tab ${pathname === "/items/new" ? "active" : ""}`}
        >
          Add New Holiday Plan
        </Link>
      </div>
      <Outlet />
    </main>
  )
}