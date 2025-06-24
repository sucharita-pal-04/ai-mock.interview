import { Link } from 'react-router-dom';
// ✅ Image import karo
import Logo from "@/assets/svg/logo.svg";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src={Logo}  // ✅ Imported image use karo
        alt="Logo"
        className="min-w-10 min-h-10 object-contain"
      />
    </Link>
  );
};
