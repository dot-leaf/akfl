// header
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const contactInfo = {
  phone1: "+92 300 0771601",
  phone2: "+92 42 35441516",
  email: "info@alkhidmat.com.pk",
};

export const socialIcons = [
  { Icon: FaFacebookF, href: "#", className: "w-5" },
  { Icon: BsTwitterX, href: "#", className: "w-5" },
  { Icon: FaInstagram, href: "#", className: "w-6" },
  { Icon: FaYoutube, href: "#", className: "w-5" },
];

// ================================================================
        // navbar 

export const navLinks = [
    { name: "Home", sublinks: [] },
    { name: "Where We Work", sublinks: ["Palestine Emergency Appeal", "Bano Qabil Program", "Orphan Care Program","Clean Water","Community Services","Disaster Management","Health","Education","Mawakhat"] },
    { name: "About Us", sublinks: ["Introduction", "President's Message", "Central Board of Management"] },
    { name: "Get Involved", sublinks: ["Ways to Donate", "Campaigns", "Careers", "Volunteer", "Events"] },
    { name: "Media", sublinks: ["News", "Downloads", "Videos"] },
    { name: "Contact Us", sublinks: [] }
];
