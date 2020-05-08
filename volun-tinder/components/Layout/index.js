import React from 'react';
import Header from '../Header';

function Layout(props) {
  return (
    <div style={{ height: '100vh', margin: 0 }}>
      <Header />
      {props.children}
      <style jsx global>{`
        * {
          @import url('https://fonts.googleapis.com/css?family=Capriola&display=swap');
          font-family: 'Capriola', sans-serif;
        }
        body {
          margin: 0;
          padding: 0;
          overflow: auto;
        }
      `}</style>
      <style jsx>{`
        * {
          background: #c6ffdd; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            #f067b4 20%,
            #81ffef 100%
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(200deg, #f067b4 20%, #81ffef 100%);
          overflow: auto;
        }
      `}</style>
    </div>
  );
}

export default Layout;
