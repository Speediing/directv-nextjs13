import React from "react";
import { get } from "@vercel/edge-config";
async function InfoHeader() {
  const shouldShowHeader = await get("shouldShowHeader");
  if (!shouldShowHeader) return <div></div>;
  return (
    <div className="h-24 bg-[#102641] text-white py-8 px-11 text-sm flex flex-col justify-center">
      <p className="font-semibold">GET BACK IN THE GAME WITH DIRECTV</p>
      <p>Missing the sports you love? DIRECTV has you covered.</p>
    </div>
  );
}

export default InfoHeader;
