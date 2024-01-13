import React from "react";
import Image from "next/image";
function Loading() {
  return <Image
           className="flex mx-auto  justify-center items-center" 
           src={"/loader.gif"} 
           height={200} 
           width={200} 
           alt="Loader"
           />;
}

export default Loading;