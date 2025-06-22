import { LoaderPage } from "@/routers/loader-page";
import {useAuth} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const protectRoutes = ( {children} : {children : React.ReactNode }) => {

  const {isLoaded , isSignedIn}= useAuth()

   if (!isLoaded) {
    return <LoaderPage />;
  }

  if (!isSignedIn) {
    return <Navigate to={"/sign-in"} replace />;
  }


  return  children;
  
};

export default protectRoutes;