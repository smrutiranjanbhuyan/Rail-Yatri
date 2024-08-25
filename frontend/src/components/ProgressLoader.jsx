import React from "react";

const ProgressLoader = () => {
  return (
    <div className="w-full mt-[53px] fixed left-0 top-2 z-50">
      <div className="h-1.5 w-full bg-pink-100 overflow-hidden">
        <div className="h-full bg-pink-500 animate-progress origin-left-right"></div>
      </div>
    </div>
  );
};

export default ProgressLoader;
