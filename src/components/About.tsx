'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Zap, Heart, Target, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services for fashion, product, and lifestyle shoots that capture your brand\'s essence with stunning visual clarity.',
      features: ['Fashion Photography', 'Product Photography', 'Lifestyle Shoots', 'Corporate Photography']
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'Dynamic video content creation including commercials, brand films, and social media content that tells your story compellingly.',
      features: ['Commercial Videos', 'Brand Films', 'Social Media Content', 'Event Coverage']
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Complete brand identity solutions from logo design to comprehensive brand guidelines that make your brand unforgettable.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: Zap,
      title: 'Digital Marketing',
      description: 'Strategic social media management and digital marketing campaigns that drive engagement and measurable results.',
      features: ['Social Media Management', 'Content Strategy', 'Campaign Development', 'Analytics & Reporting']
    },
    {
      icon: Heart,
      title: 'UGC Content',
      description: 'Authentic user-generated content creation that builds trust and community around your brand with genuine connections.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Campaign Management']
    },
    {
      icon: Target,
      title: 'Creative Direction',
      description: 'End-to-end creative direction for campaigns, ensuring consistent brand messaging across all touchpoints.',
      features: ['Creative Strategy', 'Art Direction', 'Project Management', 'Brand Consistency']
    }
  ];

  const stats = [
    { number: '5+', label: 'Years of Experience', detail: 'In creative industry' },
    { number: '150+', label: 'Projects Completed', detail: 'Successful campaigns' },
    { number: '80+', label: 'Happy Clients', detail: 'Brands elevated' },
    { number: '10+', label: 'Awards Won', detail: 'Industry recognition' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="relative py-28 lg:py-40 bg-brand-gray-850 overflow-hidden">
      {/* SVG Accents */}
      <svg className="absolute top-0 left-0 w-64 h-64 opacity-20 -z-10" viewBox="0 0 400 400" fill="none">
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF4444" />
            <stop offset="1" stopColor="#18181b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="200" ry="200" fill="url(#paint0_radial)" />
      </svg>
      
      <svg className="absolute bottom-0 right-0 w-80 h-80 opacity-10 -z-10" viewBox="0 0 400 400" fill="none">
        <defs>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF4444" />
            <stop offset="1" stopColor="#18181b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="200" ry="200" fill="url(#paint1_radial)" />
      </svg>
      
      <div className="container-custom">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
          <h2 className="text-display text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[0.9]">
            About <span className="gradient-text">Metalogue</span>
          </h2>
          <p className="text-body text-xl lg:text-2xl xl:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed">
            We are a creative production house that believes in the power of visual storytelling. 
            Our passion lies in transforming brands and ideas into compelling visual narratives 
            that resonate with audiences and create lasting impact.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-32 items-center mb-28 lg:mb-40">
          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 xl:order-1"
          >
            <div className="relative flex flex-col gap-10">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/Best Work of Metalogue/Fashion Shoot/3 wallpaper.jpg"
                    alt="About Metalogue"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-red-600/20 via-transparent to-brand-red-600/10" />
                </div>
                
                {/* Floating Stats Cards */}
                <div className="flex flex-row gap-6 justify-between mt-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass-light backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg flex-1"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2 font-display">1M+</div>
                      <div className="text-white/80 text-sm">Views Generated</div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="glass-light backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg flex-1"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2 font-display">98%</div>
                      <div className="text-white/80 text-sm">Client Satisfaction</div>
                    </div>
                  </motion.div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -inset-8 -z-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-brand-red-600/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-red-700/20 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 xl:order-2"
          >
            <div className="space-y-10 xl:space-y-14">
              <h3 className="text-display text-4xl lg:text-5xl font-bold text-white leading-tight">
                Crafting Visual Stories That Matter
              </h3>
              
              <div className="space-y-8 text-body text-lg lg:text-xl text-white/80 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize visual storytelling, Metalogue has grown 
                  from a small creative studio to a full-service production house. We specialize 
                  in creating authentic, engaging content that not only looks stunning but also 
                  drives meaningful connections between brands and their audiences.
                </p>
                
                <p>
                  Our team of creative professionals brings together diverse expertise in photography, 
                  videography, branding, and digital marketing to deliver comprehensive solutions 
                  tailored to each client's unique needs and vision.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-5">
                {[
                  'Award-winning creative team',
                  'Cutting-edge technology and equipment',
                  'Personalized approach to every project',
                  'Proven track record of success'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle size={20} className="text-brand-red-600 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 pt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center glass-light rounded-xl p-4 border border-white/10"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-brand-red-600 mb-1 font-display">{stat.number}</div>
                    <div className="text-white font-medium text-sm">{stat.label}</div>
                    <div className="text-white/60 text-xs">{stat.detail}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 lg:mb-48 relative"
        >
          {/* SVG Accent Behind Cards */}
          <svg className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-64 opacity-20 pointer-events-none -z-10" viewBox="0 0 900 200" fill="none">
            <defs>
              <radialGradient id="services-accent" cx="0" cy="0" r="1" gradientTransform="translate(450 100) scale(450 100)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EF4444" />
                <stop offset="1" stopColor="#18181b" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="450" cy="100" rx="450" ry="100" fill="url(#services-accent)" />
          </svg>
          
          <div className="text-center mb-20 lg:mb-28">
            <h3 className="text-display text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg">
              Our <span className="gradient-text">Services</span>
            </h3>
            <p className="text-body text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto font-medium">
              We offer comprehensive creative services designed to elevate your brand and create meaningful connections with your audience.
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 xl:gap-24 my-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 rgba(239,68,68,0.15)' }}
                className="relative bg-gradient-to-br from-brand-gray-800/80 to-brand-black-100/80 rounded-3xl p-12 xl:p-16 pb-14 border border-white/10 shadow-xl group flex flex-col items-center gap-8 hover:shadow-2xl transition-all duration-300 text-center"
              >
                {/* SVG Accent in Card */}
                <svg className="absolute -top-8 -right-8 w-24 h-24 opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="50" fill="#EF4444" />
                </svg>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-brand rounded-2xl mb-4 shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                  <service.icon size={40} className="text-white drop-shadow-lg" />
                </div>
                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-display tracking-tight">{service.title}</h4>
                <p className="text-body text-white/80 leading-relaxed mb-4 text-lg lg:text-xl">{service.description}</p>
                <div className="space-y-3 w-full mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-white/70 justify-center">
                      <div className="w-2.5 h-2.5 bg-brand-red-600 rounded-full"></div>
                      <span className="text-base lg:text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Section */}
        {/* SVG Divider/Accent between cards and CTA */}
        <div className="flex justify-center items-center w-full mt-24 mb-0">
          <svg className="w-2/3 h-8" viewBox="0 0 600 32" fill="none">
            <path d="M0 16 Q300 48 600 16" stroke="#EF4444" strokeWidth="2" fill="none" opacity="0.12"/>
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center mt-52 lg:mt-60 mb-24 lg:mb-36"
        >
          {/* SVG Accent Behind CTA */}
          <svg className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-64 opacity-20 pointer-events-none -z-10" viewBox="0 0 700 200" fill="none">
            <defs>
              <radialGradient id="cta-accent" cx="0" cy="0" r="1" gradientTransform="translate(350 100) scale(350 100)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EF4444" />
                <stop offset="1" stopColor="#18181b" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="350" cy="100" rx="350" ry="100" fill="url(#cta-accent)" />
          </svg>
          
          <div className="glass-light rounded-3xl px-10 pt-16 pb-20 lg:px-24 lg:pt-24 lg:pb-28 border border-white/10 relative overflow-hidden w-full max-w-3xl flex flex-col items-center text-center shadow-2xl">
            {/* Background Animation */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-red-600/10 rounded-full blur-3xl"
              />
            </div>
            <h3 className="text-display text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-10">
              Ready to Tell Your Story?
            </h3>
            <p className="text-body text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let&apos;s collaborate to create something extraordinary. Whether you need a complete brand overhaul or stunning visual content, we&apos;re here to bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center space-x-3 text-lg px-8 py-4 w-full sm:w-auto mx-auto group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 