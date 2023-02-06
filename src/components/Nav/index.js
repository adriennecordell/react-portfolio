import React from 'react';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}>
              <span onClick={() => setCurrentPage(Page)}></span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
