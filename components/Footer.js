import React from "react";

function Footer() {
  return (
    <footer>
      <div className="mt-10 text-gray-600 py-2 border-t-4 border-dashed p-4 text-base">
        <i>__Achintya, 2021__</i>
        <br />
        <div className="footer_links">
          <a className="text-sky-400" href="https://twitter.com/achintyajha_">
            Twitter
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500"
            href="https://linkedin.com/in/achintyajha"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a className="text-emerald-500" href="https://github.com/achintyajha">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
