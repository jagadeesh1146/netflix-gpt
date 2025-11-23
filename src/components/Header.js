import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";

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
        src={LOGO}
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
