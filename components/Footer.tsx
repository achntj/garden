import React from "react";
import Link from "next/link";
import NowPlaying from "./now-playing";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="prose">
      <NowPlaying />
      <div className="text-gray-600 py-2 text-base">
        <div className="flex justify-between mb-5">
          <Link href="/design.txt">
            <a className="bg-gradient-to-r dark:from-cyan-600 dark:to-teal-300 from-pink-600 to-orange-400 bg-clip-text !text-transparent">
              Design Influence
            </a>
          </Link>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
