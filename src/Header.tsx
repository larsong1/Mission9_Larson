import React from 'react';

function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-3">NCAA BB College List-</span>
          <br />
          <span className="fs-5">a list of all current NCAA colleges</span>
        </a>
      </header>
    </div>
  );
}

export default Header;
