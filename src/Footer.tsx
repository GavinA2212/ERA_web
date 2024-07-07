import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "/assets/Logo.png";

export default function Footer() {
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
            <p>
              <a
                target="_blank"
                href="mailto:info@erautomation.com"
                className="hover:text-gray-400"
              >
                info@erautomation.com
              </a>
            </p>
            <p>+123 456 7890</p>
            <p>123 Business Rd, City, Country</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold">Quick Links</h3>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/about" className="hover:text-gray-400">
              About Us
            </a>
            <a href="/services" className="hover:text-gray-400">
              Services
            </a>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
