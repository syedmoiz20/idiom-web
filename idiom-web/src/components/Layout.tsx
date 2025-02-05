import { Outlet, Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>

      <footer>© 2024 Balls</footer>
    </div>
  );
}
