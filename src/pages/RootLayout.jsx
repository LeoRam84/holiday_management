import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">Home/Dashboard</Link>
        <nav>
          <Link  to="/">Home</Link>
          <Link to="/items">Holiday Plans</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Feito com ❤️ por Leonardo Ramidan !
      </footer>
    </>
  )
}