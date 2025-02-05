import { Outlet } from "react-router-dom";

export const ReaderLayout = () => {
  return (
    <div>
      <header>
        <h1>Reader Section</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
