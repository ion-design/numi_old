// Generated with Ion on 1/29/2024, 5:29:59 PM
// Figma Link: https://www.figma.com/file/7qUnuygDS8Mwshhy6TYXa5?node-id=3005:2044
"use client";

import { MouseEvent } from "react";

function BottomCTA() {
  function bottomCTAClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("bottomCTAClickHandler fired");
  }

  return (
    <>
      <div className="flex fixed bottom-0 w-full h-fit flex-col items-center gap-4 bg-white px-6 py-4 text-sm leading-5 shadow-[0_-2px_8px_0_rgba(0,0,0,0.08)]">
        <button
          onClick={bottomCTAClickHandler}
          className="flex w-[342px] items-center justify-center gap-2 rounded-lg bg-black px-5 py-2.5 font-medium text-white"
        >
          <div>Start 2 Week Trial for $15</div>
          <img
            src="/images/bottom-cta/arrow-right.svg"
            alt="arrow-right"
            className="h-5"
          />
        </button>
        <div className="text-[#111928]">
          Questions?{" "}
          <span className="text-[#3f83f8]">
            Schedule chat with NUMI Co-Founder
          </span>
        </div>
      </div>
    </>
  );
}
export default BottomCTA;
