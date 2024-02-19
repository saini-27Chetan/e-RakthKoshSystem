import React from "react";
import { titleCaseWord } from "./Formatting";
import SearchBoxContainer from "./SearchBoxContainer";

function SubContainer({ pageText }) {
  const head = `${titleCaseWord(pageText)}`;
  return (
    <div className="mt-12 m-auto w-3/4">
      <div className="text-3xl font-bold">All {head}</div>
      <div className="text-xl text-gray-700 my-6">
        These are all available {pageText}. Kindly click on the {pageText} to
        see their details.
      </div>
      <SearchBoxContainer pageText={pageText} />
    </div>
  );
}

export default SubContainer;
