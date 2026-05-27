import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a365d] to-[#0f172a] text-white pt-16 pb-8">
      {/* Top Border Gradient */}
     

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
            
              {/* <img src="https://i.ibb.co/0RjpHVcP/logo-jnn.png" alt="Logo" className="w-full h-full jnn-logo object-cover rounded-lg" /> */}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nurturing young minds with knowledge, discipline, and strong moral values since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Academics', 'Facilities'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">More</h3>
            <ul className="space-y-2">
              {['Admissions', 'Gallery', 'Contact', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">Channasandra, Kadugodi, Bengaluru, Karnataka – 560067</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#d4af37]" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#d4af37]" />
                <a href="mailto:info@jsps.edu.in" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  info@jsps.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Jnana Samskruthi Public School. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-[#1a365d] flex items-center justify-center transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
