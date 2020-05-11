import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Search from "../components/searchcomponent/search";

export default function orgslist() {
  return (
    <div>
      <Layout>
        <Search />
        <Footer />
      </Layout>
    </div>
  );
}
