import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <img src="/images/logo.svg" />
        <div className="NavMenu">
          <a href="">
            <img src="/images/home-icon.svg" alt="" />
          </a>
          <span>HOME</span>
          <a href="">
            <img src="/images/search-icon.svg" alt="" />
          </a>
          <span>SEARCH</span>
          <a href="">
            <img src="/images/watchlist-icon.svg" alt="" />
          </a>
          <span>WATCHLIST</span>
          <a href="">
            <img src="/images/original-icon.svg" alt="" />
          </a>
          <span>ORIGINALS</span>
          <a href="">
            <img src="/images/movie-icon.svg" alt="" />
          </a>
          <span>MOVIES</span>
          <a href="">
            <img src="/images/series-icon.svg" alt="" />
          </a>
          <span>SERIES</span>
          
        </div>
        <div className="UserImg">
        <img src="/images/deepak.jpg" alt="deepak" />
        </div>
      </nav>
    </>
  );
};

export default Header;
