import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại từ React Router
  const [activeTab, setActiveTab] = useState(location.pathname); // Đặt tab hoạt động dựa trên đường dẫn

  // Function to handle tab clicks
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
          onClick={() => handleTabClick("/")}
        >
          HustFood
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            onClick={() => handleTabClick("/")}
            className={`text-lg font-medium hover:text-orange-500 ${activeTab === "/" ? "border-b-4 border-orange-500" : ""
              }`}
          >
            Trang chủ
          </Link>
          <Link
            to="/question"
            onClick={() => handleTabClick("/question")}
            className={`text-lg font-medium hover:text-orange-500 ${activeTab === "/question" ? "border-b-4 border-orange-500" : ""
              }`}
          >
            Hỗ trợ
          </Link>
          <Link
            to="/about-us"
            onClick={() => handleTabClick("/about-us")}
            className={`text-lg font-medium hover:text-orange-500 ${activeTab === "/about-us" ? "border-b-4 border-orange-500" : ""
              }`}
          >
            Giới thiệu
          </Link>
        </nav>

        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
