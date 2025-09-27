import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faFacebookF,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-black   ">
      <footer className="bg-black text-white min-h-[432px] max-w-[1600px] mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-5 text-center lg:text-left gap-4 p-10 text-gray-400">
          <div className="md:mr-10">
            <h1 className="text-2xl font-bold  pt-10 pb-4 text-white lg:text-left">CS — Ticket System
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="text-xl font-semibold pt-10 text-white">Company</h2>
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Saled</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold pt-10 text-white ">
              Services
            </h2>
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold pt-10 text-white">
              Information
            </h2>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold pt-10 text-white ">
              Social Links
            </h2>
            <div className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-black mr-2 rounded-full bg-white p-0.5 "
              />
              <p>@CS — Ticket System</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-black mr-2 rounded-full bg-white p-0.5 "
              />
              <p>@CS — Ticket System</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-black mr-2 rounded-full bg-white p-0.5 "
              />

              <p>@CS — Ticket System</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-black mr-2 rounded-full bg-white p-0.5 "
              />

              <p>support@cst.com</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 h-[1px] mx-10"></div>
        <div className="text-center py-8">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
