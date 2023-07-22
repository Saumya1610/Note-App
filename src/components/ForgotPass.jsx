import React from 'react'
import {Helmet} from 'react-helmet'

export default function ForgotPass() {
  return (
    <div>
    <Helmet>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" />
        <style>
          {`
          
#oopss {
    background: linear-gradient(-45deg, #f1f1f1, #fafafa);
    position: fixed;
    left: 0px;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 1.5em;
    z-index: 9999;
  }
  #oopss #error-text {
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Shabnam", Tahoma, sans-serif;
    color: #000;
    
  }
  #oopss #error-text img {
    margin: 85px auto 20px;
    height: 342px;
  }
  #oopss #error-text span {
    position: relative;
    font-size: 3.3em;
    font-weight: 900;
    margin-bottom: 50px;
  }
  #oopss #error-text p.p-a {
    font-size: 19px;
    margin: 30px 0 15px 0;
    padding: 0 300px 0px;
    text-align: center;
    
  }
  #oopss #error-text p.p-b {
    font-size: 15px;
  }
  `}
        </style>
      </Helmet>
        <div id="oopss">
  <div id="error-text">
    <img
      src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
      alt={404}
    />
    <span>Error 404</span>
    <p className="p-a">Page not found! Looks like the URL went on a vacation without leaving a forwarding address. Let's hope it's enjoying some sunny beaches and will be back soon!</p>
    <p className="p-b">You will be redirected to the homepage.</p>
  </div>
</div>

    </div>
  )
}