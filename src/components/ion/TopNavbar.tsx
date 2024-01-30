// Generated with Ion on 1/29/2024, 6:13:22 PM
// Figma Link: https://www.figma.com/file/7qUnuygDS8Mwshhy6TYXa5?node-id=3005:2317
"use client";
import clsx from "clsx";
type TopNavbarProps = {
  title?: string;
  showLogo?: boolean;
  showLeft?: boolean;
  showRight?: boolean;
  className?: string;
};

function TopNavbar({
  title,
  showLogo,
  showLeft,
  showRight,
  className,
}: TopNavbarProps) {
  function leftArrowClickHandler() {
    alert("leftArrowClickHandler fired");
  }

  function rightArrowClickHandler() {
    alert("rightArrowClickHandler fired");
  }

  return (
    <div
      className={clsx(
        "flex h-[78px] w-full bg-black p-6",
        {
          "flex-col items-start justify-center gap-2": showLogo,
          "items-center justify-between text-base font-semibold leading-5 text-white":
            !showLogo,
        },
        className
      )}
    >
      {showLogo ? (
        <img src="/images/top-navbar/logo.svg" alt="logo" className="h-full" />
      ) : (
        <>
          <button
            onClick={leftArrowClickHandler}
            className={clsx({ "opacity-0 pointer-events-none": !showLeft })}
          >
            <img
              src="/images/top-navbar/leftArrow.svg"
              alt="logo"
              className="h-full w-4"
            />
          </button>
          {title && <div>{title}</div>}
          <button
            onClick={rightArrowClickHandler}
            className={clsx({ "opacity-0 pointer-events-none": !showRight })}
          >
            <img
              src="/images/top-navbar/rightArrow.svg"
              alt="logo"
              className="h-full w-4"
            />
          </button>
        </>
      )}
    </div>
  );
}
export default TopNavbar;
