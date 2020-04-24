import React from 'react';
import Header from './Header';

function Layout(props) {
  return (
    <div id="layout">
      <Header />
      {props.children}
      <style jsx global>{`
        * {
          font-family: calibri;
        }
      `}</style>
      <style jsx>{`
        * {
          background: #c6ffdd; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #f7797d,
            #fbd786,
            #c6ffdd
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #f7797d,
            #fbd786,
            #c6ffdd
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `}</style>
    </div>
  );
}

export default Layout;
