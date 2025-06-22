import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layout";



import AuthenticationLayout from "@/layouts/auth-layout";
import  ProtectRoutes from "./layouts/protected-route";
import  {MainLayout} from "./layouts/main-layout";

import HomePage from "@/routers/home";
import { SignInPage } from "./routers/sign-in";
import {SignUpPage } from "./routers/sign-up";

const App = () => {

  return(
    <Router>
      <Routes>
         {/* public routes */}
         <Route element ={<PublicLayout/>}>
         <Route index element = {<HomePage/>} />
         </Route>

          {/* authentication layout */}
          <Route element ={<AuthenticationLayout/>}>
         <Route  path="/signin/*" element = {<SignInPage/>} />
          <Route  path="/signup/*" element = {<SignUpPage/>} />
          </Route>



         {/* protected routes */}
         <Route 
         element ={ 
          <ProtectRoutes> 
          <MainLayout />
          
           </ProtectRoutes>
          }
          >

         </Route>
      </Routes>
    </Router>

  )
 
};

export default App;