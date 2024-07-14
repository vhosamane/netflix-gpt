import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LOGO } from "../../utils/constants";
import { useEffect } from "react";

const Header = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            <Navigate to='/login' replace />
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName
                }));
                nav('/browse');
            } else {
                dispatch(removeUser());
                nav('/login')
            }
        });
    }, []);


    return (
        <header>
            <div className="logo">
                <Link to='/'>
                    <img src={LOGO}
                    alt="logo" />
                </Link>
            </div>

            <div className="userDetails">
                {
                    user ? <p onClick={handleSignOut} className="signout-link">Sign Out</p> : <Link to='/login' className="btn cust-btn btn-red" type="button">Sign In</Link>
                }
            </div>
        </header>
    )
}

export default Header;
    