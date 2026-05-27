import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  BookOpen,
  Award,
 Zap,
  Shield,
} from "lucide-react";

import Layout from "@/components/Layout";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentRightImage, setCurrentRightImage] = useState(0);

  const [counters, setCounters] = useState({
    years: 0,
    students: 0,
    teachers: 0,
    classrooms: 0,
  });

  // HERO SLIDES
  const heroSlides = [
    {
      title: "Welcome to Jnana Samskruthi Public School",
      subtitle: "Academic Excellence • Character Building • Future Leadership",
      description:
        "Empowering young minds with knowledge, culture, and confidence for a successful future.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Building Future Leaders Through Education",
      subtitle: "Holistic Development • Modern Learning",
      description:
        "Where students learn values, leadership, and innovation together.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
    },
    {
      title: "Safe & Inspiring Learning Environment",
      subtitle: "Smart Classrooms • Caring Teachers",
      description:
        "Creating an environment where every student grows with confidence.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Excellence in Academics & Values",
      subtitle: "Pre-Primary to Grade 8",
      description:
        "Strong foundations for academic success and moral values.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    },
    {
      title: "A School That Inspires Every Child",
      subtitle: "Modern Facilities • Holistic Education",
      description:
        "Where education meets creativity, discipline, and innovation.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  // RIGHT SIDE IMAGE CAROUSEL
  const rightImages = [
    "https://i.ibb.co/PGrQw361/jnn4.png",
    " https://i.ibb.co/5W5nTcgP/Chat-GPT-Image-May-27-2026-02-38-24-PM.png",
    "https://i.ibb.co/0yJ6C8zm/Chat-GPT-Image-May-27-2026-01-09-00-PM.png",
    "https://i.ibb.co/YBk5Z89g/Chat-GPT-Image-May-27-2026-02-30-53-PM.png",
    "https://i.ibb.co/LXLYTH3D/jnn14.png",
  ];

  // FEATURES
  const features = [
    {
      icon: Users,
      title: "Experienced Teachers",
      desc: "Dedicated and qualified faculty members.",
    },
    {
      icon: Shield,
      title: "Safe Campus",
      desc: "Secure and student-friendly environment.",
    },
    {
      icon: Zap,
      title: "Digital Learning",
      desc: "Modern learning technologies and smart teaching.",
    },
    {
      icon: BookOpen,
      title: "Rich Library",
      desc: "576+ books for knowledge and learning.",
    },
    {
      icon: Award,
      title: "Holistic Education",
      desc: "Academic and personal growth together.",
    },
    {
      icon: Star,
      title: "15+ Years Excellence",
      desc: "Trusted educational institution since 2010.",
    },
  ];

  // TESTIMONIALS
  const testimonials = [
    {
      name: "Parent",
      text: "Excellent teaching and caring environment.",
    },
    {
      name: "Parent",
      text: "Best school for foundational learning.",
    },
    {
      name: "Parent",
      text: "Highly disciplined and supportive faculty.",
    },
  ];

  // AUTO MAIN CAROUSEL
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

      setCurrentRightImage(
        (prev) => (prev + 1) % rightImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // COUNTER ANIMATION
  useEffect(() => {
    const targets = {
      years: 15,
      students: 500,
      teachers: 10,
      classrooms: 16,
    };

    const interval = setInterval(() => {
      setCounters((prev) => ({
        years:
          prev.years < targets.years ? prev.years + 1 : targets.years,
        students:
          prev.students < targets.students
            ? prev.students + 25
            : targets.students,
        teachers:
          prev.teachers < targets.teachers
            ? prev.teachers + 1
            : targets.teachers,
        classrooms:
          prev.classrooms < targets.classrooms
            ? prev.classrooms + 1
            : targets.classrooms,
      }));
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // NEXT SLIDE
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

    setCurrentRightImage(
      (prev) => (prev + 1) % rightImages.length
    );
  };

  // PREVIOUS SLIDE
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

    setCurrentRightImage(
      (prev) => (prev - 1 + rightImages.length) % rightImages.length
    );
  };

  return (
    <Layout>
      {/* HERO SECTION */}
 {/* HERO SECTION */}
<section className="relative ">
  <AnimatePresence mode="wait">
    {heroSlides.map(
      (slide, index) =>
        index === currentSlide && (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className=" inset-0"
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 to-[#2563eb]/60" />

            {/* CONTENT */}
            <div className="relative z-10 container mx-auto min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-24">

              {/* GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

                {/* LEFT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white order-1"
                >
                  {/* QUOTE */}
                  <div className="mb-6 border-l-4 border-[#d4af37] pl-4">
                    <p className="text-sm sm:text-base lg:text-lg italic text-white/90 leading-relaxed">
                      “Education is the passport to the future,
                      for tomorrow belongs to those who prepare
                      for it today.”
                    </p>
                  </div>

                  {/* TITLE */}
                  <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-6">
                    {slide.title}
                  </h1>

                  {/* SUBTITLE */}
                  <p className="text-lg sm:text-xl lg:text-2xl text-[#d4af37] mb-4 font-medium leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
                    {slide.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="px-6 sm:px-8 py-4 bg-white text-[#1a365d] rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto">
                      Explore Campus
                    </button>

                    <button className="px-6 sm:px-8 py-4 bg-[#d4af37] text-[#1a365d] rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto">
                      Apply Admission
                    </button>
                  </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="flex justify-center lg:justify-end order-2"
                >
                  <div className="relative w-full max-w-[500px]">

                    {/* GLOW */}
                    <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-[#d4af37]/40 to-[#2563eb]/40 blur-3xl animate-pulse"></div>

                    {/* IMAGE */}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentRightImage}
                        src={rightImages[currentRightImage]}
                        alt="School"
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.8,
                        }}
                        className="relative z-10 w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-[30px] shadow-[0_20px_80px_rgba(0,0,0,0.4)] border border-white/20"
                      />
                    </AnimatePresence>

                    {/* FLOATING CARD */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="absolute bottom-4 left-4 lg:-bottom-8 lg:-left-8 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 lg:p-6 shadow-2xl"
                    >
                      <h3 className="text-white text-2xl lg:text-3xl font-bold">
                        15+
                      </h3>

                      <p className="text-white/80 text-sm lg:text-base">
                        Years Excellence
                      </p>
                    </motion.div>

                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )
    )}
  </AnimatePresence>

  {/* LEFT ARROW */}
  <button
    onClick={prevSlide}
    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#1a365d] transition-all duration-300"
  >
    <ChevronLeft size={24} />
  </button>

  {/* RIGHT ARROW */}
  <button
    onClick={nextSlide}
    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#1a365d] transition-all duration-300"
  >
    <ChevronRight size={24} />
  </button>

  {/* DOTS */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
    {heroSlides.map((_, idx) => (
      <button
        key={idx}
        onClick={() => {
          setCurrentSlide(idx);
          setCurrentRightImage(idx);
        }}
        className={`transition-all duration-300 rounded-full ${
          idx === currentSlide
            ? "w-8 sm:w-10 h-3 bg-[#d4af37]"
            : "w-3 h-3 bg-white/50"
        }`}
      />
    ))}
  </div>
</section>

      {/* COUNTERS SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                label: "Years Excellence",
                value: counters.years,
                suffix: "+",
              },
              {
                label: "Students",
                value: counters.students,
                suffix: "+",
              },
              {
                label: "Teachers",
                value: counters.teachers,
                suffix: "+",
              },
              {
                label: "Classrooms",
                value: counters.classrooms,
                suffix: "+",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h2 className="text-5xl font-bold mb-2 text-[#d4af37]">
                  {item.value}
                  {item.suffix}
                </h2>

                <p className="text-white/80 text-lg">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-[#1a365d] mb-16">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl p-10 text-center border border-gray-100 hover:border-[#2563eb] transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#1a365d] to-[#2563eb] flex items-center justify-center mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://i.ibb.co/0yJ6C8zm/Chat-GPT-Image-May-27-2026-01-09-00-PM.png"
                alt="About School"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-[#1a365d] mb-6">
                About Our School
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Jnana Samskruthi Public School was established in
                2010 with the mission of delivering quality education
                and building future leaders with strong moral values.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We provide holistic education with modern classrooms,
                experienced faculty, digital learning, library
                resources, and a safe learning environment.
              </p>

              <button className="px-8 py-4 bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-[#1a365d] mb-16">
            What Parents Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-3xl p-10 shadow-xl"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{item.text}"
                </p>

                <h4 className="font-bold text-[#1a365d]">
                  {item.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-[#1a365d] to-[#2563eb] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Admissions Open
          </h2>

          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
            Join Jnana Samskruthi Public School and provide your child
            with a future-focused, value-based education.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="px-8 py-4 bg-white text-[#1a365d] rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl">
              Apply Now
            </button>

            <button className="px-8 py-4 border-2 border-white rounded-xl font-bold hover:bg-white hover:text-[#1a365d] transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}