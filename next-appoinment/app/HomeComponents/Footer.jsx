import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#031b4e] text-white py-12 px-6 mt-20 sm:mb-6 md:mb-[28vh] lg:mb-[44vh] xl:mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">MediConnect</h2>
          <p className="text-sm text-gray-300 mb-4">
            Your trusted platform for booking appointments with top-rated doctors. Fast, secure, and reliable.
          </p>
    
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-lime-400 transition">Home</Link></li>
            <li><Link href="/doctors" className="hover:text-lime-400 transition">Find Doctors</Link></li>
            <li><Link href="/appointments" className="hover:text-lime-400 transition">Appointments</Link></li>
            <li><Link href="/contact" className="hover:text-lime-400 transition">Contact</Link></li>
            <li><Link href="/about" className="hover:text-lime-400 transition">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/privacy-policy" className="hover:text-lime-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-lime-400 transition">Terms of Service</Link></li>
            <li><Link href="/faq" className="hover:text-lime-400 transition">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 88619 60254</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@mediconnect.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Bangalore, India</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-lime-400"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-lime-400"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-lime-400"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-100">
        © {new Date().getFullYear()} MediConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
