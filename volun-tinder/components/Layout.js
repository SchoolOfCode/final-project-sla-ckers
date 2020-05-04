import React from "react";
import Header from "./Header";

function Layout(props) {
  return (
    <div id="layout">
      <Header />
      {props.children}
      <style jsx global>{`
        * {
          @import url("https://fonts.googleapis.com/css?family=Capriola&display=swap");
          font-family: "Capriola", sans-serif;
        }
      `}</style>
      <style jsx>{`
        * {
          background: #c6ffdd; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #e5107b,
            #ffffff,
            #45d7bb
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #e5107b,
            #ffffff,
            #45d7bb
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `}</style>
    </div>
  );
}

export default Layout;
