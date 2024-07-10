import { useNavigate } from "react-router-dom";
import Logo from "/assets/Logo.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:flex md:justify-between md:py-20">
          <div className="mb-6 flex flex-col items-center md:mb-0 md:items-start">
            <img src={Logo} className="h-20" />
            <p className="mt-2 text-center md:text-left">
              Empowering Efficiency with Cutting-Edge Automation Solutions
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold">Contact Us</h3>
            <p className="mt-1">
              <a
                target="_blank"
                href="mailto:info@erautomation.com"
                className="mt-6 hover:text-gray-400">
                info@erautomation.com
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              <li onClick={() => navigate("/")} className="cursor-pointer hover:text-gray-400">
                Home
              </li>
              <li onClick={() => navigate("/about")} className="cursor-pointer hover:text-gray-400">
                About Us
              </li>
              <li
                onClick={() => navigate("/services")}
                className="cursor-pointer hover:text-gray-400">
                Services
              </li>
              <li
                onClick={() => navigate("/contact")}
                className="cursor-pointer hover:text-gray-400">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          © 2023 ERAutomation. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}