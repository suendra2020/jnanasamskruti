import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Calendar, Award } from 'lucide-react';
import Layout from '@/components/Layout';

export default function Admissions() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const admissionProcess = [
    { icon: FileText, title: 'Inquiry', desc: 'Submit inquiry form or visit campus' },
    { icon: Calendar, title: 'Campus Visit', desc: 'Schedule a tour and meet faculty' },
    { icon: FileText, title: 'Registration', desc: 'Complete registration process' },
    { icon: Award, title: 'Confirmation', desc: 'Receive admission confirmation' },
  ];

  const requiredDocuments = [
    'Birth Certificate (Original & Copy)',
    'Aadhar Card (Copy)',
    'Previous School Transfer Certificate',
    'Previous School Progress Report',
    'Vaccination Certificate',
    'Medical Certificate',
    'Passport Size Photographs (4)',
    'Proof of Residence',
  ];

  const faqItems = [
    {
      question: 'What is the admission age for Pre-Primary?',
      answer: 'Children aged 3-5 years are eligible for Pre-Primary admission. Age proof is required at the time of admission.',
    },
    {
      question: 'What is the admission process?',
      answer: 'The admission process involves inquiry, campus visit, registration, and final confirmation. Please contact us for detailed information.',
    },
    {
      question: 'Do you offer scholarships?',
      answer: 'We offer merit-based scholarships for deserving students. Please contact the admissions office for details.',
    },
    {
      question: 'What is the medium of instruction?',
      answer: 'The medium of instruction is Kannada for all classes from Pre-Primary to Grade 8.',
    },
    {
      question: 'Are there any entrance exams?',
      answer: 'We conduct an assessment for Grade 1 onwards to understand the child\'s learning level. Pre-Primary admission is based on interaction.',
    },
    {
      question: 'What is the fee structure?',
      answer: 'Fee structure varies by class. Please contact the admissions office for detailed fee information.',
    },
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
            Admissions Open
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join our community of learners and be part of an exceptional educational journey.
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {admissionProcess.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1a365d] to-[#2563eb] flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {idx < admissionProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#2563eb] to-transparent"></div>
                  )}
                </div>
                <h3 className="text-heading-md mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Required Documents</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requiredDocuments.map((doc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white border-l-4 border-[#d4af37]"
                >
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{doc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Admission Inquiry Form</h2>
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Student Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb]"
                    placeholder="Enter student name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Class</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb]">
                    <option>Select Class</option>
                    <option>Pre-Primary</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Parent Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb]"
                    placeholder="Enter parent name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb]"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb]"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb]"
                  placeholder="Write your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-display-md text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span>{item.question}</span>
                  <span className={`transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-600"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white text-center">
        <div className="container">
          <h2 className="text-display-md mb-6">Ready to Join Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a campus tour and learn more about our programs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105">
              Schedule Tour
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
