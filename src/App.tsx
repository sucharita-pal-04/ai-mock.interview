import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "@/layouts/auth-layout";
import ProtectRoutes from "./layouts/protected-route";
import { MainLayout } from "./layouts/main-layout";
import { Generate } from "./components/generate";
import { Dashboard } from "./routers/dashboard";
import HomePage from "@/routers/home";
import { SignInPage } from "./routers/sign-in";
import { SignUpPage } from "./routers/sign-up";
import { CreateEditPage } from "./routers/create-edit-page";
import { MockLoadPage } from "./routers/mock-load-page";
import { MockInterviewPage } from "./routers/mock-interview-page";
import { Feedback } from "./routers/feedback";

const App = () => {

  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />

        </Route>



        {/* protected routes */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />

            </ProtectRoutes>
          }
        >

          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />

            {/* create route */}
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />

            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
         />
 <Route path="feedback/:interviewId" element={<Feedback />} />
        </Route>

      </Route>
    </Routes>
    </Router >

  );

};

export default App;