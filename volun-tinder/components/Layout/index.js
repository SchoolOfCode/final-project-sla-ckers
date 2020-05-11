import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout(props) {
  return (
    <div id="layoutContainer">
      <Header />
      {props.children}
      <style jsx global>{`
        * {
          @import url("https://fonts.googleapis.com/css?family=Capriola&display=swap");

          font-family: "Capriola", sans-serif;
        }
        body {
          margin: 0;
          padding: 0;
          overflow: auto;
        }
      `}</style>
      <Footer />
    </div>
  );
}

export default Layout;
