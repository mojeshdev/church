import React from "react";
import {  Mail, Phone } from "lucide-react";
import Tooltip from "../components/Tooltip.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-600 text-white py-10 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1: About Church */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-3">YSM Ministry</h2>
          <p className="text-sm text-gray-200 font-body leading-relaxed">
            YSM Church is a place of worship, faith, and fellowship — where lives are transformed by the love of Christ. 
            Join us in prayer, service, and spiritual growth.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-3 font-heading">Contact Us</h2>
          <ul className="space-y-2 text-gray-200">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Mail size={18} /> 
              <a href="mailto:ysmministry7@gmail.com" className="hover:text-pink-300 transition">Mail US</a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone size={18} /> 
              <a href="tel:+919052623886" className="hover:text-pink-300 transition">+91 90526 23886</a>
            </li>
            <li className="text-gray-300 font-body">
              📍 Near MPP School Chikkavaram Road Chintagunta Kandrika, Krishna District, Andhra Pradesh, India
            </li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-3 font-heading">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-5 mt-2">
           <Tooltip />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm text-gray-200">
        <p>YSM Ministry © {year} | “Let your light shine before others.” – Matthew 5:16</p>
      </div>
    </footer>
  );
}
