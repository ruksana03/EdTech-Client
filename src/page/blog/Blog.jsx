
import BlogNev from "../../components/blogComponents/BlogNev";
import { Outlet } from "react-router-dom";
import BlogFooter from "./BlogFooter";
import { useDispatch } from "react-redux";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { loginUser, setLoading } from "../../Features/UserSlice";
import auth from "../../firebase/firebase.config";

const Blog = () => {
    const dispatch = useDispatch();
    const axiosPublic = useAxiosPublic();
    
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

    return (
        <div>
            <div className="lg:fixed top-0 left-0 w-full z-50">
                <BlogNev />
            </div >
            <div className=' min-h-[calc(100vh-48px)]'>
                <Outlet></Outlet>
            </div>
            <BlogFooter />
        </div>
    );
};

export default Blog;