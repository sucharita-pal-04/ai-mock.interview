import { Outlet } from "react-router-dom";

// ✅ Image import karo
import bgImg from "@/assets/img/bg.png";

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      <img
        src={bgImg} // ✅ Correct import use karo
        className="absolute w-full h-full object-cover opacity-20"
        alt="Background"
      />
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
