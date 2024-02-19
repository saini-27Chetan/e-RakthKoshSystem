import React from "react";
import { formatWord } from "./Formatting";

function DisplayInfo({ pageText }) {
  const template = (
    <div className="col-span-1">
      <div className="border-black border-2 rounded-lg my-5 grid grid-cols-3">
        <div className="col-span-1 border-yellow-300 border-4 flex justify-center items-center">
          Logo
        </div>
        <div className="col-span-2">
          {pageText === "blood inventories" ? (
            <div className="mx-3 my-2">
              <div className="text-blue-500 font-bold text-lg">
                A+ ve (90 units)
              </div>
              <div>{formatWord(pageText)}</div>
              <div>Contact: 9999999999</div>
              <div>Email: abc@gamil.com</div>
              <div>City: Location</div>
            </div>
          ) : (
            <div className="mx-3 my-2">
              <div className="text-blue-500 font-bold text-lg">
                {formatWord(pageText)} + Location
              </div>
              <div>Contact: 9999999999</div>
              <div>Email: abc@gamil.com</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-3 place-content-evenly px-10 gap-6 w-3/4 m-auto">
      {template}
      {template}
      {template}
    </div>
  );
}

export default DisplayInfo;
