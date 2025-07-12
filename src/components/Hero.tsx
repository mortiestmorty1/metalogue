'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, Award, Users, Eye, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { 
      icon: Award, 
      label: 'Projects Completed', 
      value: '150+',
      description: 'Successful campaigns delivered'
    },
    { 
      icon: Users, 
      label: 'Happy Clients', 
      value: '80+',
      description: 'Brands we\'ve elevated'
    },
    { 
      icon: Eye, 
      label: 'Visual Stories', 
      value: '1M+',
      description: 'Views generated across platforms'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Spacer to prevent navbar overlap */}
      <div className="h-20 lg:h-24 w-full" />
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32 lg:pb-44">
      {/* Enhanced Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black-100 via-brand-black-200 to-brand-black-100" />
        <Image
          src="/assets/Best Work of Metalogue/Fashion Shoot/5 wallpaper.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black-100/95 via-brand-black-100/60 to-brand-black-100/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black-100/90 via-transparent to-brand-black-100/30" />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
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
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-red-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red-700/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center container-custom"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="max-w-6xl mx-auto flex flex-col gap-14 lg:gap-20"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-4 lg:mb-8">
            <motion.h1 className="text-display text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] mb-4 lg:mb-8">
              <span className="block">VISUAL</span>
              <span className="block">
                <span className="gradient-text">STORYTELLING</span>
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light text-white/90 mt-2 lg:mt-4">
                REDEFINED
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-6 lg:mb-10">
            <p className="text-body text-xl lg:text-2xl xl:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We craft compelling visual narratives that captivate, inspire, and elevate brands 
              through innovative photography, videography, and digital artistry.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-10 lg:mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-3 text-lg px-8 py-4 group"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye size={22} className="group-hover:scale-110 transition-transform" />
                <span>View Our Work</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-3 text-lg px-8 py-4 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>Get Started</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div variants={itemVariants} className="mt-10 lg:mt-16 mb-20 lg:mb-32 flex flex-col md:flex-row justify-center items-stretch gap-8 lg:gap-14">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                className="group relative flex-1 min-w-[220px]"
              >
                <div className="glass-light p-10 md:p-12 rounded-2xl hover-lift hover-glow border border-white/10 backdrop-blur-xl mx-auto h-full flex flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-2xl mb-4 shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                    <stat.icon size={28} className="text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
                    {stat.value}
                  </div>
                  <div className="text-brand-red-600 font-semibold mb-2 text-lg">
                    {stat.label}
                  </div>
                  <div className="text-white/60 text-sm">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Bottom Gradient for Blend */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 z-0" style={{background: 'linear-gradient(to bottom, rgba(23,23,23,0) 0%, #18181b 100%)'}} />
    </section>
    </>
  );
};

export default Hero; 