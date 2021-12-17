import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        Achintya, 2021
        <br />
        <div className="footer_links">
          <a
            className="special_link twitter"
            href="https://twitter.com/achintyajha05"
          >
            Twitter
          </a>{" "}
          |{" "}
          <a
            className="special_link linkedin"
            href="https://linkedin.com/in/achintyajha"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            className="special_link github"
            href="https://github.com/achintyajha"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
