import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user); // 👈 get logged-in user from Redux

  const handleSignout = async () => {
    try {
      await signOut(auth);
      // No need to navigate manually, onAuthStateChanged will handle it
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="absolute w-screen h-16 bg-gradient-to-b from-gray-800 z-10 flex justify-between items-center px-8">
      {/* ✅ Netflix Logo - always visible */}
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="w-32"
      />

      {/* ✅ Show Sign Out only when user exists */}
      {user && (
        <button
          onClick={handleSignout}
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
