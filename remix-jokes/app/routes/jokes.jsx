import { Outlet } from "@remix-run/react";

export default  JokesRoute = () =>  {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}