import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Heart } from 'lucide-react';
import Layout from '@/components/Layout';

export default function About() {
  const sections = [
    { icon: Award, title: 'Our Vision', text: 'To nurture young minds with knowledge, discipline, culture, creativity, leadership, and strong moral values.' },
    { icon: Heart, title: 'Our Mission', text: 'To provide holistic education that empowers students academically, socially, emotionally, and ethically.' },
    { icon: Users, title: 'Our Community', text: 'A diverse, supportive community of educators, students, and parents working together for excellence.' },
    { icon: BookOpen, title: 'Our Approach', text: 'Student-focused learning with activity-based education and character development at the core.' },
  ];

  const infrastructure = [
    { icon: '📚', title: '16 Smart Classrooms', desc: 'Modern, well-equipped learning spaces' },
    { icon: '🏃', title: 'Playground', desc: 'Spacious outdoor recreation area' },
    { icon: '📖', title: 'Library', desc: '576 books and educational resources' },
    { icon: '💻', title: 'Computer Lab', desc: 'Digital literacy and coding education' },
    { icon: '🛡️', title: 'Safe Campus', desc: 'Secure and supervised environment' },
    { icon: '👨‍🏫', title: 'Experienced Faculty', desc: 'Qualified and dedicated teachers' },
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
            About Jnana Samskruthi Public School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Established in 2010, we've been committed to providing quality education and holistic development for over 15 years.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="w-full h-80 bg-gradient-to-br from-[#1a365d] to-[#2563eb] rounded-xl shadow-premium"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-display-md mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2010, Jnana Samskruthi Public School was established with a vision to create an institution that goes beyond traditional academics. We believe in nurturing the complete development of every child.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over the years, we have grown into a trusted educational institution serving the Channasandra and surrounding communities. Our commitment to excellence, safety, and holistic development remains unwavering.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, with 16 smart classrooms, experienced faculty, and modern facilities, we continue to empower students to become responsible, creative, and compassionate leaders of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl glass hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#1a365d] to-[#2563eb] flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-heading-md mb-3">{section.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{section.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Our Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructure.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl border-2 border-gray-200 hover:border-[#2563eb] hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-heading-md mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Our Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 rounded-xl glass hover-lift"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1a365d] to-[#2563eb] mx-auto mb-4"></div>
                <h3 className="text-heading-md mb-2">Teacher {idx}</h3>
                <p className="text-gray-600 text-sm mb-2">Subject Specialist</p>
                <p className="text-gray-500 text-xs">Dedicated to student success and holistic development</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Years of Excellence', value: '15+' },
            { label: 'Students Educated', value: '500+' },
            { label: 'Experienced Teachers', value: '10+' },
            { label: 'Smart Classrooms', value: '16' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
