import { motion } from 'framer-motion';
import { Zap, Users, BookOpen, Gamepad2, Shield, Wifi } from 'lucide-react';
import Layout from '@/components/Layout';

export default function Facilities() {
  const facilities = [
    {
      icon: Zap,
      title: 'Smart Classrooms',
      description: '16 modern, well-equipped classrooms with interactive boards and digital learning tools',
      features: ['Interactive Whiteboards', 'Digital Content', 'Comfortable Seating', 'Natural Lighting'],
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Comprehensive library with 576+ books and educational resources',
      features: ['Reference Books', 'Story Books', 'Digital Resources', 'Reading Area'],
    },
    {
      icon: Wifi,
      title: 'Computer Lab',
      description: 'State-of-the-art computer lab for digital literacy and coding education',
      features: ['Modern Computers', 'Internet Access', 'Coding Software', 'Tech Support'],
    },
    {
      icon: Gamepad2,
      title: 'Playground',
      description: 'Spacious outdoor area for sports and physical activities',
      features: ['Sports Equipment', 'Safe Surface', 'Shaded Areas', 'Recreation Space'],
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Comprehensive safety measures and secure campus environment',
      features: ['CCTV Surveillance', 'Security Staff', 'First Aid', 'Emergency Protocols'],
    },
    {
      icon: Users,
      title: 'Activity Areas',
      description: 'Dedicated spaces for art, music, and other extracurricular activities',
      features: ['Art Studio', 'Music Room', 'Activity Space', 'Creative Tools'],
    },
  ];

  const amenities = [
    { emoji: '🚌', title: 'Transportation', desc: 'Safe and reliable transport facility' },
    { emoji: '🍽️', title: 'Cafeteria', desc: 'Nutritious meals and snacks' },
    { emoji: '🚽', title: 'Separate Toilets', desc: 'Clean facilities for boys and girls' },
    { emoji: '🏥', title: 'Medical Care', desc: 'First aid and health support' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-lg mb-6 text-4xl"
          >
            World-Class Facilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Modern infrastructure designed to support comprehensive learning and development.
          </motion.p>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all group"
              >
                <div className="h-48 bg-gradient-to-br from-[#1a365d] to-[#2563eb] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <facility.icon className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="p-8">
                  <h3 className="text-heading-md mb-2">{facility.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Additional Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl glass hover:shadow-lg transition-all text-center"
              >
                <div className="text-5xl mb-4">{amenity.emoji}</div>
                <h3 className="text-heading-md mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Tour */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Campus Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Smart Learning Environment', desc: 'Interactive boards and digital resources in every classroom' },
              { title: 'Safe & Secure Campus', desc: 'CCTV surveillance and trained security personnel' },
              { title: 'Experienced Faculty', desc: 'Qualified teachers dedicated to student success' },
              { title: 'Modern Infrastructure', desc: '16 classrooms with all necessary learning aids' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#1a365d] to-[#2563eb] flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-heading-md mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white text-center">
        <div className="container">
          <h2 className="text-display-md mb-6">Visit Our Campus</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience our world-class facilities firsthand. Schedule a campus tour today!
          </p>
          <button className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105">
            Schedule Campus Tour
          </button>
        </div>
      </section>
    </Layout>
  );
}
