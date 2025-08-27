import React from "react";
import { BACKGROUND_IMAGE } from "../utils/Constants";
import { languagePref } from "../utils/Constants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((state) => state.userBasedConfig.lang);
  debugger
  console.log("Redux lang value:", lang);
  console.log("languagePref array:", languagePref);
  const currentLanguage = languagePref.find((l) => {
    return l.label === lang;
  });
  console.log("Current language object:", currentLanguage);
  return (
    <div >
      <div className="absolute -z-20">
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <form className="flex flex-row justify-center">
        <div className="bg-black w-[650px] mt-[150px] grid grid-cols-12">
        <input
          type="text"
          className="col-span-10 p-2"
          placeholder={currentLanguage?.placeholderValue}
        />
        <button className="col-span-2 bg-red-500 text-white px-4 py-2">
          {currentLanguage?.SearchValue}
        </button>
        </div>
      </form>
      </div>
  );
};

export default GptSearchBar;
