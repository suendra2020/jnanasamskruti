import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

import Layout from "@/components/Layout";

export default function Contact() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Address",
      content:
        "Channasandra, Kadugodi, Bengaluru, Karnataka – 560067",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@jsps.edu.in",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri : 8:00 AM - 3:30 PM",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
    },
    {
      icon: Instagram,
      href: "#",
    },
    {
      icon: Twitter,
      href: "#",
    },
    {
      icon: MessageCircle,
      href: "#",
    },
  ];

  const quickLinks = [
    {
      title: "Admissions",
      desc: "Learn more about admission process and eligibility.",
    },
    {
      title: "Academics",
      desc: "Explore our curriculum and academic excellence.",
    },
    {
      title: "Facilities",
      desc: "Discover our campus and modern infrastructure.",
    },
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#1a365d] via-[#2563eb] to-[#0f172a] text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="uppercase tracking-[4px] text-[#d4af37] font-semibold mb-4">
              Contact Us
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              We'd Love To Hear From You
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Reach out to Jnana Samskruthi Public School for admissions,
              campus visits, academic queries, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactCards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center hover:border-[#2563eb] transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-[#1a365d] to-[#2563eb] flex items-center justify-center mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#1a365d] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-8">
                Send Us A Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>

                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* GOOGLE MAP */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl min-h-[500px] border border-white"
            >
              <iframe
                title="School Location"
                src="https://www.google.com/maps?q=12.9773104,77.7713511&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-6">
              Connect With Us
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
              Follow us on social media to stay updated with school
              events, activities, and announcements.
            </p>

            <div className="flex justify-center flex-wrap gap-6">
              {socialLinks.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1a365d] to-[#2563eb] flex items-center justify-center text-white shadow-xl"
                >
                  <item.icon className="w-7 h-7" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-4">
              Quick Links
            </h2>

            <p className="text-gray-600 text-lg">
              Explore important sections of our school website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:border-[#2563eb] transition-all duration-300 text-center"
              >
                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Schedule A Campus Visit
            </h2>

            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Visit our campus and experience the learning environment,
              facilities, and culture of Jnana Samskruthi Public School.
            </p>

            <button className="px-8 py-4 bg-white text-[#1a365d] rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
              Book Campus Tour
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}