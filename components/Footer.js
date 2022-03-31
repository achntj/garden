import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="prose">
      <div className="mt-10 text-gray-600 py-2 border-t-4 border-dashed p-4 text-base">
        <i>__Achintya, 2022__</i>
        <br />
        <a className="!text-sky-400" href="https://twitter.com/achintyajha_">
          Twitter
        </a>{" "}
        |{" "}
        <a
          className="!text-blue-500"
          href="https://linkedin.com/in/achintyajha"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a className="!text-emerald-500" href="https://github.com/achintyajha">
          Github
        </a>
        <br />
        <Link href="/design.txt">Design Influence</Link>
      </div>
    </footer>
  );
}

export default Footer;
