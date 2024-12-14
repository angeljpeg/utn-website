import React from "react";

export function PulseLoader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full h-20 w-20 bg-green-800 animate-ping"></div>
    </div>
  );
}
