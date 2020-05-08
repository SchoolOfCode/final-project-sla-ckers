import React from "react";
import Header from "../Header";

function Layout(props) {
  return (
    <div style={{ height: "100vh", margin: 0 }}>
      <Header />
      {props.children}
      <style jsx global>{`
        * {
          @import url("https://fonts.googleapis.com/css?family=Capriola&display=swap");
        }
        body {
          margin: 0;
          padding: 0;
          overflow: auto;
        }
      `}</style>
    </div>
  );
}

export default Layout;
