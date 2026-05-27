import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb, Award } from 'lucide-react';
import Layout from '@/components/Layout';

export default function Academics() {
  const programs = [
    {
      title: 'Pre-Primary',
      age: 'Age 3-5',
      description: 'Foundation building through play-based learning',
      features: ['Phonics & Numbers', 'Art & Craft', 'Music & Movement', 'Social Skills'],
    },
    {
      title: 'Primary Education',
      age: 'Grade 1-3',
      description: 'Building strong academic foundations',
      features: ['Core Subjects', 'Computer Education', 'Physical Education', 'Arts'],
    },
    {
      title: 'Upper Primary',
      age: 'Grade 4-8',
      description: 'Advanced learning with specialization',
      features: ['Science Lab', 'Mathematics', 'Languages', 'Digital Literacy'],
    },
  ];

  const highlights = [
    { icon: BookOpen, title: 'Kannada Medium', desc: 'Quality education in mother tongue' },
    { icon: Lightbulb, title: 'Activity-Based', desc: 'Learning through hands-on activities' },
    { icon: Users, title: 'Small Class Size', desc: 'Personalized attention for each student' },
    { icon: Award, title: 'Holistic Development', desc: 'Academic excellence with character building' },
  ];

  const curriculum = [
    'Kannada Language & Literature',
    'English Language & Literature',
    'Mathematics',
    'Science (Biology, Chemistry, Physics)',
    'Social Studies',
    'Computer Education',
    'Physical Education',
    'Art & Music',
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
            Academic Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive education programs designed to nurture young minds and build strong foundations for future success.
          </motion.p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-[#1a365d] to-[#2563eb]"></div>
                <div className="p-8">
                  <h3 className="text-heading-lg mb-2">{program.title}</h3>
                  <p className="text-[#d4af37] font-semibold mb-3">{program.age}</p>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
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

      {/* Academic Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Why Our Academics Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl glass hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#1a365d] to-[#2563eb] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-heading-md mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Our Curriculum</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculum.map((subject, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-[#2563eb] transition-all"
                >
                  <div className="w-3 h-3 rounded-full bg-[#d4af37]"></div>
                  <span className="text-gray-700 font-medium">{subject}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Our Learning Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="space-y-6">
                {[
                  { title: 'Student-Centric', desc: 'Every lesson is designed with the student at the center' },
                  { title: 'Activity-Based', desc: 'Learning through hands-on activities and experiments' },
                  { title: 'Character Development', desc: 'Building values alongside academics' },
                  { title: 'Digital Integration', desc: 'Modern technology in traditional learning' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1a365d] to-[#2563eb] flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-heading-md mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-[#1a365d] to-[#2563eb] rounded-xl shadow-premium"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
