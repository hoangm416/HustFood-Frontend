import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import qrCode from "../assets/qr-code.png";

const Footer = () => {
  return (
    <div className="bg-white py-5 border-t-2 border-orange-500">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Logo and Links */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-orange-500">HustFood</h1>
          <div className="flex flex-col space-y-2 text-gray-700">
            <a href="about-us" className="hover:text-blue-600">Về HustFood</a>
            <a href="about-us" className="hover:text-blue-600">Chính sách và điều khoản</a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-gray-700">
          <p className="font-bold">Hotline: 1900232345</p>
          <p>Email: <a href="mailto:hotro@hustfood.com.vn" className="hover:text-blue-600">hotro@hustfood.com.vn</a></p>
          <a href="question" className="hover:text-blue-600">Câu hỏi thường gặp</a>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <p className="font-bold">Kết nối với chúng tôi</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-75"
            >
              <FaFacebook className="w-8 h-8 text-blue-600" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-75"
            >
              <FaInstagram className="w-8 h-8 text-pink-500" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:opacity-75"
            >
              <FaYoutube className="w-8 h-8 text-red-500" />
            </a>
          </div>
        </div>


        {/* QR Code Section */}
        <div className="flex flex-col space-y-2 text-gray-700 items-center">
          <img
            src={qrCode}
            alt="QR Code"
            width={96}
            height={96}
            className="rounded"
          />
          <p>Quét mã này để tải ứng dụng</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
