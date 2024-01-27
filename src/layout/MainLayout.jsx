import { useDispatch } from "react-redux";
import "../App.css";
import Header from "../components/header/Header";
import Footer from './../components/Footer';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { loginUser, setLoading } from "../Features/UserSlice";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SubNav from "../components/header/navbar/SubNav";

const MainLayout = () => {

  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      
        if (currentUser) {
            dispatch(loginUser({
                name: currentUser.displayName,
                email: currentUser.email,
                photo: currentUser.photoURL
            }));
            const userInfo = { email: currentUser.email };
            axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            dispatch(setLoading(false));
                        }
                    })
        }
        else {
             // Remove token
             localStorage.removeItem('access-token');
             dispatch(setLoading(false));
        }

    })
    return () => {
        return unsubscribe;
    }
}, [dispatch,axiosPublic])

  return (
    <div>
    <SubNav/>
    <Header />
    <Footer />
  </div>
  );
};
export default MainLayout;
