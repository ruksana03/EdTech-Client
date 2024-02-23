import { useDispatch } from "react-redux";
import "../App.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { loginUser, setLoading } from "../Features/UserSlice";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import SubNav from "../components/header/navbar/SubNav";
import { Outlet } from "react-router-dom";
import Navber from "../components/header/navbar/Navber";
import Footer from "../page/home/Footer/Footer";
import 'regenerator-runtime/runtime'

import MessengerCustomerChat from 'react-messenger-customer-chat';
import Preloader from "../components/shared/Preloader";

const MainLayout = () => {
  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          loginUser({
            name: currentUser.displayName,
            email: currentUser.email,
            photo: currentUser.photoURL,
          })
        );
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            dispatch(setLoading(false));
          }
        });
      } else {
        // Remove token
        localStorage.removeItem("access-token");
        dispatch(setLoading(false));
      }
    });
    return () => {
      return unsubscribe;
    };
  }, [dispatch, axiosPublic]);


  useEffect(() => {
    const loadingData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
    }
    loadingData();
  }, [])

  return (
    <>
      {
        isLoading ? <Preloader /> :
          <>
            <Navber />
            <Outlet />
            <Footer />
            <MessengerCustomerChat pageId="211034232098177" appId="711331871134355" />
          </>
      }
    </ >
  );
};
export default MainLayout;
