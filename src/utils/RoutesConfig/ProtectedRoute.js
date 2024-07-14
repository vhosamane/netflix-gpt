import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    console.log(user);
    if(!user) {
        return <Navigate to='/' replace />
    }
    return children;
}

export default ProtectedRoute;
