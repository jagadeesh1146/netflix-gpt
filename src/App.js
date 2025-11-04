import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";

const AppWrapper = () => {
  return (
    <Provider store={appStore}>
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // cleanup
  }, [dispatch, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default AppWrapper;
