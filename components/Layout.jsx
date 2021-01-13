import React from "react";
import Head from "next/head";

//components
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>myteam</title>
        <meta name="description" content="myteam website" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Navbar />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
