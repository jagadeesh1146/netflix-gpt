import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {

  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const showLanguageOption = useSelector((store)=>store.gpt.showGptSearch)
  const [showSearch, setShowSearch] = useState(false);

  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleGptSearch=()=>{
    dispatch(toggleGptSearchView())

  }
  const handleLanguage=(e)=>{
    dispatch(changeLang(e.target.value))

  }

  return (
    <div className="absolute w-screen h-16 bg-gradient-to-b from-gray-800 z-10 flex justify-between items-center px-8">
      <img src={LOGO} alt="Netflix Logo" className="w-32" />

      {user && (
        <div className="flex items-center gap-4">
          { showLanguageOption &&
          <select className=" px-4 py-2 bg-red-700 rounded-sm " onChange={handleLanguage}>
            {SUPPORTED_LANGUAGE.map((lang)=>(
              <option key={lang.identifier}value={lang.identifier}>{lang.name}</option>

            ))}
           
          </select>}
          <button onClick={handleGptSearch} className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">
            GPT search
          </button>
          <button
            onClick={handleSignout}
            className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
