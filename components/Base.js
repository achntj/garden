// components/Base.js

import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div id="main" role="main" className="container">
        {children}
      </div>
      <Footer />
    </>
  );
}
