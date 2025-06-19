import React from 'react';
import { translate } from "components/Translation/Translation";
import "pages/NotFound/NotFound.css";
import Navbar from "components/Navbar/Navbar";

const NotFound = () => {
  const notfound = translate("notfound");
  const routemain = translate("routemain");

  return (
    <div className="top-not-found">
      <Navbar />
      <div className='not-found'>

      
      <img
        src={`${process.env.PUBLIC_URL}/notfound.svg`}
        alt="https://www.freepik.com/author/macrovector"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
        }}
      />
      <div className="rotated-container">
        <div className="rotated-div">
          <h1>{notfound}</h1>
        </div>
      </div>
      <div className="notfound-button-container">
        <a href={`${process.env.PUBLIC_URL}/`} className="notfound-button">{routemain}</a>
      </div>
    </div>
    </div>
  );
};

export default NotFound;
