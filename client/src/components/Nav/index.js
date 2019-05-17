import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../../Saved">Saved</a>
      </li>
      </ul>
    </nav>
  );
}

export default Nav;
