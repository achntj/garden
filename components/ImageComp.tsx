import Image from "next/image";
import { useState } from "react";
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ImageComp({ props }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <div className="entry">
        <div className="text-center extra" key={props.image}>
          <Image
            alt={props.alt}
            src={`/images/${props.image}`}
            width={props.width}
            height={props.height}
            className={cn(
              `duration-700 ease-in-out ${props.classes}`,
              isLoading
                ? "grayscale blur-2xl scale-110"
                : "grayscale-0 blur-0 scale-100"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
          {props.desc && (
            <em className="block m-5 text-[#666]">{props.desc}</em>
          )}
        </div>
      </div>
    </>
  );
}
