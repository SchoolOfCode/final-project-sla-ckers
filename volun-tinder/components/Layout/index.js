import React from "react";
import Header from "../Header";

function Layout(props) {
  return (
    <div style={{ height: "100vh" }}>
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
           
            #f067b4 20%,
          
            #81ffef 100%
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(200deg,
            #f067b4 20%,

            #81FFEF 100%
            
           
);
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `}</style>
    </div>
  );
}

export default Layout;
