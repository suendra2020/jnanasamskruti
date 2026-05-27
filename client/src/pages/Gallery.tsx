import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'campus', 'events', 'students', 'activities', 'classrooms'];

  const galleryItems = [
    { id: 1, category: 'campus', title: 'Campus Overview' },
    { id: 2, category: 'classrooms', title: 'Smart Classroom' },
    { id: 3, category: 'activities', title: 'Student Activities' },
    { id: 4, category: 'events', title: 'School Events' },
    { id: 5, category: 'students', title: 'Happy Students' },
    { id: 6, category: 'campus', title: 'Playground' },
    { id: 7, category: 'classrooms', title: 'Learning Space' },
    { id: 8, category: 'activities', title: 'Sports Day' },
    { id: 9, category: 'events', title: 'Annual Function' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore moments from our school life and campus activities.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer h-64"
              >
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gradient-to-br from-[#1a365d] to-[#2563eb] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">📷</div>
                    <p className="text-sm opacity-80">{item.title}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-heading-md mb-2">{item.title}</h3>
                    <p className="text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Gallery Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: '📸', title: 'Photos', count: '500+' },
              { icon: '🎬', title: 'Events', count: '50+' },
              { icon: '👥', title: 'Students', count: '500+' },
              { icon: '🏆', title: 'Achievements', count: '100+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl glass hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#2563eb] mb-2">{stat.count}</div>
                <p className="text-gray-600">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white text-center">
        <div className="container">
          <h2 className="text-display-md mb-6">Share Your Moments</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have a great photo from school? Share it with us and get featured in our gallery!
          </p>
          <button className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105">
            Submit Photo
          </button>
        </div>
      </section>
    </Layout>
  );
}
