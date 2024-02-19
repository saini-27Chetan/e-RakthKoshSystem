import React from "react";
import { useParams } from "react-router-dom";
import CommonSubHead from "../CommonSubHead";
import SubContainer from "../SearchComponent/SubContainer";
import DisplayInfo from "../SearchComponent/DisplayInfo";

function Search() {
  const { pageText } = useParams();

  return (
    <div className="mb-10">
      <CommonSubHead pageText={pageText} />
      <SubContainer pageText={pageText} />
      <div className="m-auto mt-10">
        <DisplayInfo pageText={pageText}/>
      </div>
    </div>
  );
}

export default Search;
