'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Zap, Heart, Target, ArrowRight, Check, Play, X } from 'lucide-react';
import Image from 'next/image';

const Services = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const mainServices = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services that capture your brand\'s essence.',
      features: ['Fashion Photography', 'Product Photography', 'Lifestyle Shoots', 'Corporate Photography'],
      image: '/assets/Best Work of Metalogue/Fashion Shoot/1.jpg',
      videoUrl: null
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'Dynamic video content that tells your story compellingly.',
      videoUrl: 'https://youtu.be/MhP77YYDQKY?si=VYY3_qnHjtbyhKG9',
      isVideo: true,
      thumbnail: 'https://img.youtube.com/vi/MhP77YYDQKY/maxresdefault.jpg'
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Complete brand identity solutions that make you stand out.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      image: '/assets/Best Work of Metalogue/Branding/MATALOGUE.png',
      videoUrl: null
    },
    {
      icon: Zap,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive results.',
      features: ['Social Media Management', 'Content Strategy', 'Campaign Development', 'Analytics & Reporting'],
      image: '/assets/Best Work of Metalogue/SMM/1.png',
      videoUrl: null
    },
    {
      icon: Heart,
      title: 'UGC Content',
      description: 'Authentic user-generated content that builds trust.',
      videoUrl: 'https://www.youtube.com/shorts/o79qt8uHB5U',
      isVideo: true,
      isShort: true,
      thumbnail: 'https://img.youtube.com/vi/o79qt8uHB5U/maxresdefault.jpg'
    },
    {
      icon: Target,
      title: 'Creative Direction',
      description: 'End-to-end creative direction for comprehensive campaigns.',
      features: ['Creative Strategy', 'Art Direction', 'Project Management', 'Brand Consistency'],
      image: '/assets/Best Work of Metalogue/Fashion Shoot/3.jpg',
      videoUrl: null
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We begin by understanding your brand, goals, and vision through comprehensive consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a tailored creative strategy that aligns with your objectives and target audience.'
    },
    {
      step: '03',
      title: 'Creation',
      description: 'Our team brings your vision to life with stunning visuals and compelling content.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'We deliver exceptional results on time and provide ongoing support for your success.'
    }
  ];

  const getYouTubeEmbedUrl = (url: string, isShort: boolean = false) => {
    if (isShort) {
      // Convert YouTube Shorts to embed URL
      const videoId = url.match(/\/shorts\/([^?]+)/)?.[1];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    } else {
      // Convert regular YouTube URL to embed URL
      const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&\n?#]+)/)?.[1];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
  };

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      {/* Top Spacing to separate from Hero */}
      <div className="h-32 lg:h-40"></div>
      
      <section id="services" className="py-32 lg:py-40 bg-brand-gray relative w-full">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-red/20"></div>
        </div>
        
        {/* Main Container - Properly Centered */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-32 w-full"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-12 leading-[0.9]">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                We offer comprehensive creative services designed to elevate your brand and 
                create meaningful connections with your audience through powerful visual storytelling.
              </p>
            </motion.div>

            {/* Main Services Grid - Properly Centered */}
            <div className="w-full flex justify-center mb-40">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20 w-full max-w-6xl">
                {mainServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-brand-black rounded-3xl p-8 lg:p-10 xl:p-12 hover-lift group border border-white/5 shadow-2xl shadow-black/20 w-full"
                  >
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-20 lg:w-24 h-20 lg:h-24 bg-brand-red/10 rounded-3xl mb-8 lg:mb-10 group-hover:bg-brand-red/20 transition-all duration-300">
                      <service.icon size={40} className="lg:w-12 lg:h-12 text-brand-red" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-6 lg:mb-8 leading-tight text-center">{service.title}</h3>
                    <p className="text-gray-300 mb-8 lg:mb-12 leading-relaxed text-base lg:text-lg xl:text-xl text-center">{service.description}</p>

                    {/* Media Preview */}
                    {service.isVideo ? (
                      <div className="mb-8 lg:mb-12 relative group cursor-pointer overflow-hidden rounded-2xl" onClick={() => handleVideoClick(service.videoUrl!)}>
                        <div className={`relative ${
                          service.isShort ? 'aspect-[9/16]' : 'aspect-video'
                        }`}>
                          {/* YouTube Thumbnail */}
                          <Image
                            src={service.thumbnail || ''}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                              className="w-16 lg:w-20 xl:w-24 h-16 lg:h-20 xl:h-24 bg-gradient-to-r from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-brand-red/30 group-hover:shadow-brand-red/50"
                            >
                              <Play size={24} className="lg:w-8 lg:h-8 xl:w-8 xl:h-8 text-white ml-1" />
                            </motion.div>
                          </div>
                          
                          {/* Video Info */}
                          <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4">
                            <div className="flex items-center justify-between">
                              <span className="text-xs lg:text-sm bg-black/70 text-white px-2 lg:px-3 py-1 lg:py-2 rounded-full backdrop-blur-sm font-medium">
                                {service.isShort ? 'YouTube Short' : 'YouTube Video'}
                              </span>
                              <span className="text-xs lg:text-sm text-white/90 font-medium">Click to watch</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : service.image ? (
                      <div className="mb-8 lg:mb-12 relative overflow-hidden rounded-2xl aspect-[4/3]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    ) : null}

                    {/* Features */}
                    <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-12">
                      {service.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3 lg:space-x-4 text-gray-300">
                          <Check size={16} className="lg:w-5 lg:h-5 text-brand-red flex-shrink-0" />
                          <span className="text-sm lg:text-base xl:text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="text-center">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center space-x-3 lg:space-x-4 text-brand-red font-semibold text-base lg:text-lg xl:text-xl group-hover:text-white transition-all duration-300"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        <span>Learn More</span>
                        <ArrowRight size={16} className="lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section Spacing */}
            <div className="h-20 lg:h-32"></div>

            {/* Process Section - Enhanced Timeline Design */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-40 w-full relative"
            >
              <div className="text-center mb-32 w-full">
                <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-12 leading-[0.9]">
                  Our <span className="gradient-text">Process</span>
                </h3>
                <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
                  We follow a proven process to ensure exceptional results for every project.
                </p>
              </div>

              {/* Timeline Container - Properly Centered */}
              <div className="w-full flex justify-center">
                <div className="relative w-full max-w-6xl">
                  {/* Central Timeline Line - Fixed Visibility */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-brand-red/30 via-brand-red/60 to-brand-red/30 z-0 hidden lg:block">
                    {/* Timeline Line Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-red/50 via-brand-red/80 to-brand-red/50 blur-md opacity-40"></div>
                  </div>

                  {/* Process Steps Timeline */}
                  <div className="space-y-32 lg:space-y-40 relative">
                    {processSteps.map((step, index) => {
                      const isLeft = index % 2 === 0;
                      
                      return (
                        <motion.div
                          key={step.step}
                          initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ 
                            duration: 0.8, 
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                          }}
                          className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                            isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                          }`}
                        >
                          {/* Process Content */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.2 + 0.3,
                              type: "spring",
                              stiffness: 200
                            }}
                            className={`flex-1 max-w-md lg:max-w-lg xl:max-w-xl ${
                              isLeft ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                            }`}
                          >
                            {/* Content */}
                            <div className={`${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                              <motion.h4
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                                className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight"
                              >
                                {step.title}
                              </motion.h4>
                              <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                                className="text-gray-300 leading-relaxed text-lg lg:text-xl xl:text-2xl"
                              >
                                {step.description}
                              </motion.p>
                            </div>
                          </motion.div>

                          {/* Timeline Node - Single Number Display */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.2 + 0.4,
                              type: "spring",
                              stiffness: 300
                            }}
                            className="relative z-10 flex-shrink-0"
                          >
                            {/* Main Node */}
                            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-brand-red/50 border-4 border-brand-black-100 relative group">
                              {/* Animated Ring */}
                              <motion.div
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  delay: index * 0.5
                                }}
                                className="absolute inset-0 rounded-full border-2 border-brand-red/40"
                              />
                              
                              {/* Inner Glow */}
                              <div className="absolute inset-2 bg-gradient-to-r from-brand-red/20 to-red-600/20 rounded-full blur-sm"></div>
                              
                              {/* Step Number - Only One */}
                              <span className="text-2xl lg:text-3xl font-bold text-white relative z-10">{step.step}</span>
                            </div>

                            {/* Connection Lines for Mobile */}
                            <div className="lg:hidden absolute top-1/2 w-32 h-1 bg-gradient-to-r from-brand-red/30 to-transparent transform -translate-y-1/2 left-20"></div>
                          </motion.div>

                          {/* Right Side Spacer for Layout Balance */}
                          <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl"></div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Bottom Timeline End */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-8 h-8 bg-gradient-to-r from-brand-red to-red-600 rounded-full shadow-2xl shadow-brand-red/50 border-4 border-brand-black-100 hidden lg:block z-10"
                  >
                    {/* End Node Glow */}
                    <div className="absolute inset-0 rounded-full bg-brand-red/20 blur-sm"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Section Spacing */}
            <div className="h-20 lg:h-32"></div>

            {/* Call to Action - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center w-full"
            >
              <div className="w-full flex justify-center">
                <div className="bg-gradient-to-r from-brand-black to-brand-black/80 rounded-3xl p-12 lg:p-16 xl:p-20 border border-white/10 shadow-2xl shadow-black/30 max-w-5xl w-full">
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-8 lg:mb-12 leading-[0.9] text-center">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-lg lg:text-xl xl:text-2xl text-gray-300 mb-10 lg:mb-16 max-w-4xl mx-auto leading-relaxed text-center">
                    Let&apos;s discuss how we can bring your vision to life with our comprehensive creative services.
                  </p>
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-2xl text-lg lg:text-xl xl:text-2xl font-semibold transition-all duration-300 shadow-2xl shadow-brand-red/30 hover:shadow-brand-red/50"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Started Today
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Spacing */}
        <div className="h-32 lg:h-40"></div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={closeVideo}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-5xl w-full glass-light rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="relative">
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo, selectedVideo.includes('/shorts/'))}
                title="YouTube Video"
                className="w-full aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Services; 