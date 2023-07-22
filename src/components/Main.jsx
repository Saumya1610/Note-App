import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Home from './Home';
import { Link } from 'react-router-dom';

const Main = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.header');
    const headerTop = header.getBoundingClientRect().top;

    const handleScroll = () => {
      setIsSticky(window.scrollY > headerTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <body>
    <Helmet>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" />
        <style>
          {`
          :root {
  --color-primary: purple;
  accent-color: var(--color-primary);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;
  height: 300vh;
  
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

h1 {
  margin-block-end: 1rem;
  font-size: 3rem;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.header {
  padding: 1rem 2rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 4rem;
  width: min(90%, 1200px);
  margin-inline: auto;
  background-color: #fff;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
}
.header.is-sticky {
  width: 100%;
  top: 0;
  border-radius: 0 0 20px 20px;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__nav ul {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.header__nav li {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
}

.header__logo {
  color: lightslategray;
}
`}
      </style>
      </Helmet>

    <header className={`header ${isSticky ? 'is-sticky' : ''}`}>
      <div className="header__inner">
        <div className="header__logo">
          <svg width="110" height="26" fill="none" 
          xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.745.03c-.297-.02-.596-.03-.898-.03C5.752 0 0 5.752 0 12.847s5.752 12.846 12.847 12.846c5.806 0 10.713-3.852 12.304-9.14-.37.087-.755.133-1.15.133h-5.256a5 5 0 0 1-5-5V.031Zm27.204 25.663c7.095 0 12.847-5.751 12.847-12.846S48.044 0 40.949 0 28.102 5.752 28.102 12.847s5.752 12.846 12.847 12.846Zm56.204 0c7.095 0 12.847-5.751 12.847-12.846S104.248 0 97.153 0 84.307 5.752 84.307 12.847s5.751 12.846 12.846 12.846ZM81.898 12.847c0 6.08-4.224 11.174-9.898 12.506V23a5 5 0 0 0-5-5h-9c-.237 0-.47.017-.699.049a12.803 12.803 0 0 1-1.097-5.202C56.204 5.752 61.956 0 69.051 0s12.847 5.752 12.847 12.847Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="header__nav">
          <ul>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Signin</Link></li>
            <li><Link to="/home">Download</Link></li>
          </ul>
        </div>
      </div>
    </header>
    <Home/>
    </body>
  );
};

export default Main;