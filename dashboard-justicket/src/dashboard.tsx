import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Route {
  name: string;
  path: string;
  content: JSX.Element;
}

function Dashboard() {
    console.log('dash');
    
  const location = useLocation();
  const activeRoute = location.pathname.slice(1) || "home";

  const routes: Route[] = [
    {
      name: "Home",
      path: "/home",
      content: <p>This is the content for Home.</p>,
    },
    {
      name: "Dashboard Item 1",
      path: "/item1",
      content: <p>This is the content for Dashboard Item 1.</p>,
    },
    {
      name: "Dashboard Item 2",
      path: "/item2",
      content: <p>This is the content for Dashboard Item 2.</p>,
    },
    {
      name: "Dashboard Item 3",
      path: "/item3",
      content: <p>This is the content for Dashboard Item 3.</p>,
    },
  ];

  return (
    <>
      <header>
        <h1>Dashboard</h1>
      </header>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.path} className={activeRoute === route.path.slice(1) ? "active" : ""}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <section>
        {routes.map((route) => route.path === `/${activeRoute}` && route.content)}
      </section>
    </>
  );
}

export default Dashboard;
