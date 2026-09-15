import React from 'react'

function Header() {
  return (
    <header className="header">
      <h1>Dashboard</h1>

      <div className="header-search">
        <label htmlFor="searchInput">Search students</label>
        <input
          id="searchInput"
          type="search"
          placeholder="Search for a student"
        />
      </div>
    </header>
  );
}

export default Header;