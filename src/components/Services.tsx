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
      
      <section id="services" className="py-32 lg:py-40 bg-brand-gray relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-red/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-12 leading-[0.9]">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              We offer comprehensive creative services designed to elevate your brand and 
              create meaningful connections with your audience through powerful visual storytelling.
            </p>
          </motion.div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-40">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-black rounded-3xl p-12 hover-lift group border border-white/5 shadow-2xl shadow-black/20"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-red/10 rounded-3xl mb-10 group-hover:bg-brand-red/20 transition-all duration-300">
                  <service.icon size={48} className="text-brand-red" />
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 leading-tight">{service.title}</h3>
                <p className="text-gray-300 mb-12 leading-relaxed text-lg lg:text-xl">{service.description}</p>

                {/* Media Preview */}
                {service.isVideo ? (
                  <div className="mb-12 relative group cursor-pointer overflow-hidden rounded-2xl" onClick={() => handleVideoClick(service.videoUrl!)}>
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
                          className="w-24 h-24 bg-gradient-to-r from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-brand-red/30 group-hover:shadow-brand-red/50"
                        >
                          <Play size={32} className="text-white ml-1" />
                        </motion.div>
                      </div>
                      
                      {/* Video Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm font-medium">
                            {service.isShort ? 'YouTube Short' : 'YouTube Video'}
                          </span>
                          <span className="text-sm text-white/90 font-medium">Click to watch</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : service.image ? (
                  <div className="mb-12 relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ) : null}

                {/* Features */}
                <ul className="space-y-4 mb-12">
                  {service.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-4 text-gray-300">
                      <Check size={20} className="text-brand-red flex-shrink-0" />
                      <span className="text-base lg:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-4 text-brand-red font-semibold text-lg lg:text-xl group-hover:text-white transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="text-center mb-24">
              <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-12 leading-[0.9]">
                Our <span className="gradient-text">Process</span>
              </h3>
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We follow a proven process to ensure exceptional results for every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-brand-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-brand-red/20">
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-brand-red/20 to-transparent transform translate-x-12"></div>
                    )}
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-semibold text-white mb-6">{step.title}</h4>
                  <p className="text-gray-300 leading-relaxed text-lg lg:text-xl">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-brand-black to-brand-black/80 rounded-3xl p-20 border border-white/10 shadow-2xl shadow-black/30"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-12 leading-[0.9]">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can bring your vision to life with our comprehensive creative services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-6 rounded-2xl text-xl lg:text-2xl font-semibold transition-all duration-300 shadow-2xl shadow-brand-red/30 hover:shadow-brand-red/50"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </motion.button>
          </motion.div>
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