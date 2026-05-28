import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get current route
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ================= Logo ================= */}
          <Link href="/">
            <a className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/TMbW3YdQ/logo-jnn.png"
                alt="Logo"
                className="jnn-logo w-14 h-14 object-cover rounded-xl shadow-md"
              />
            </a>
          </Link>

          {/* ================= Desktop Menu ================= */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = location === item.href;

              return (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`relative pb-2 text-[15px] tracking-wide transition-all duration-300
                    ${
                      isActive
                        ? 'text-[#2563eb] font-bold'
                        : 'text-gray-700 font-medium hover:text-[#2563eb]'
                    }`}
                  >
                    {item.label}

                    {/* Active Border */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-[#d4af37] transition-all duration-300
                      ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </a>
                </Link>
              );
            })}
          </div>

          {/* ================= CTA Button ================= */}
          <div className="hidden md:block">
            <button className="px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#1a365d] to-[#2563eb] hover:scale-105 hover:shadow-xl transition-all duration-300">
              Admissions Open
            </button>
          </div>

          {/* ================= Mobile Menu Button ================= */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-7 h-7 text-gray-700" />
            ) : (
              <Menu className="w-7 h-7 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container mx-auto px-4 py-5 space-y-2">
              {navItems.map((item) => {
                const isActive = location === item.href;

                return (
                  <Link key={item.href} href={item.href}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-all duration-300
                      ${
                        isActive
                          ? 'bg-blue-50 text-[#2563eb] font-bold border-l-4 border-[#2563eb]'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </a>
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <button className="w-full mt-3 px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#1a365d] to-[#2563eb] hover:shadow-lg transition-all">
                Admissions Open
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}