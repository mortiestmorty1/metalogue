'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, X, Grid3X3, List } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image?: string;
  videoUrl?: string;
  isVideo?: boolean;
  isShort?: boolean;
  thumbnail?: string;
  description?: string;
  client?: string;
  year?: string;
  tags?: string[];
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = [
    { name: 'All', count: 30 },
    { name: 'ADs', count: 5 },
    { name: 'Branding', count: 4 },
    { name: 'Fashion Shoot', count: 6 },
    { name: 'Product Photography', count: 6 },
    { name: 'SMM', count: 5 },
    { name: 'UGC', count: 4 }
  ];

  const portfolioItems: PortfolioItem[] = [
    // ADs
    { 
      id: '1', 
      title: 'AirPods Pro Campaign', 
      category: 'ADs', 
      videoUrl: 'https://youtu.be/MhP77YYDQKY?si=VYY3_qnHjtbyhKG9',
      isVideo: true,
      thumbnail: 'https://img.youtube.com/vi/MhP77YYDQKY/maxresdefault.jpg',
      client: 'Apple',
      year: '2024',
      description: 'Premium audio experience redefined through cinematic storytelling and sleek product integration.',
      tags: ['Commercial', 'Product', 'Tech']
    },
    { 
      id: '2', 
      title: 'Blonche Brand Campaign', 
      category: 'ADs', 
      videoUrl: 'https://www.youtube.com/shorts/lHWowB-y6k8',
      isVideo: true,
      isShort: true,
      thumbnail: 'https://img.youtube.com/vi/lHWowB-y6k8/maxresdefault.jpg',
      client: 'Blonche',
      year: '2024',
      description: 'Luxury fashion brand campaign showcasing elegance and sophistication.',
      tags: ['Fashion', 'Luxury', 'Brand']
    },
    { 
      id: '3', 
      title: 'Embroz Outdoor Adventure', 
      category: 'ADs', 
      videoUrl: 'https://www.youtube.com/shorts/ijthKIUeyOQ',
      isVideo: true,
      isShort: true,
      thumbnail: 'https://img.youtube.com/vi/ijthKIUeyOQ/maxresdefault.jpg',
      client: 'Embroz',
      year: '2024',
      description: 'Outdoor lifestyle campaign capturing the spirit of adventure and exploration.',
      tags: ['Outdoor', 'Adventure', 'Lifestyle']
    },
    { 
      id: '4', 
      title: 'Nectar Premium Commercial', 
      category: 'ADs', 
      videoUrl: 'https://www.youtube.com/shorts/o79qt8uHB5U',
      isVideo: true,
      isShort: true,
      thumbnail: 'https://img.youtube.com/vi/o79qt8uHB5U/maxresdefault.jpg',
      client: 'Nectar',
      year: '2024',
      description: 'Refreshing beverage commercial with vibrant colors and dynamic cinematography.',
      tags: ['Food & Beverage', 'Commercial', 'Lifestyle']
    },
    { 
      id: '5', 
      title: 'Watch X Luxury Timepiece', 
      category: 'ADs', 
      videoUrl: 'https://youtu.be/MhP77YYDQKY?si=VYY3_qnHjtbyhKG9',
      isVideo: true,
      thumbnail: 'https://img.youtube.com/vi/MhP77YYDQKY/maxresdefault.jpg',
      client: 'Watch X',
      year: '2024',
      description: 'High-end timepiece commercial emphasizing craftsmanship and precision.',
      tags: ['Luxury', 'Product', 'Timepiece']
    },
    
    // Branding
    { 
      id: '6', 
      title: 'Metalogue Brand Identity', 
      category: 'Branding', 
      image: '/assets/Best Work of Metalogue/Branding/MATALOGUE.png',
      client: 'Metalogue',
      year: '2024',
      description: 'Complete brand identity system for creative production house.',
      tags: ['Identity', 'Logo', 'Creative']
    },
    { 
      id: '7', 
      title: 'Bloom Organic Brand', 
      category: 'Branding', 
      image: '/assets/Best Work of Metalogue/Branding/bloom-02.png',
      client: 'Bloom',
      year: '2024',
      description: 'Organic and sustainable brand identity with natural aesthetics.',
      tags: ['Organic', 'Sustainability', 'Natural']
    },
    { 
      id: '8', 
      title: 'Digital Epic Technology', 
      category: 'Branding', 
      image: '/assets/Best Work of Metalogue/Branding/DIGITAL EPIC-02.png',
      client: 'Digital Epic',
      year: '2024',
      description: 'Modern tech company branding with futuristic design elements.',
      tags: ['Technology', 'Digital', 'Innovation']
    },
    { 
      id: '9', 
      title: 'Friends Fries Restaurant', 
      category: 'Branding', 
      image: '/assets/Best Work of Metalogue/Branding/friends fries.png',
      client: 'Friends Fries',
      year: '2024',
      description: 'Playful restaurant branding with vibrant colors and friendly aesthetics.',
      tags: ['Restaurant', 'Food', 'Casual']
    },
    
    // Fashion Shoot
    { 
      id: '10', 
      title: 'Editorial Fashion Series I', 
      category: 'Fashion Shoot', 
      image: '/assets/Best Work of Metalogue/Fashion Shoot/1.jpg',
      client: 'Fashion Magazine',
      year: '2024',
      description: 'High-fashion editorial shoot with dramatic lighting and bold styling.',
      tags: ['Editorial', 'High Fashion', 'Studio']
    },
    { 
      id: '11', 
      title: 'Editorial Fashion Series II', 
      category: 'Fashion Shoot', 
      image: '/assets/Best Work of Metalogue/Fashion Shoot/2.jpg',
      client: 'Fashion Magazine',
      year: '2024',
      description: 'Contemporary fashion photography with urban aesthetics.',
      tags: ['Editorial', 'Urban', 'Contemporary']
    },
    { 
      id: '12', 
      title: 'Editorial Fashion Series III', 
      category: 'Fashion Shoot', 
      image: '/assets/Best Work of Metalogue/Fashion Shoot/3.jpg',
      client: 'Fashion Magazine',
      year: '2024',
      description: 'Minimalist fashion photography with clean lines and sophisticated styling.',
      tags: ['Editorial', 'Minimalist', 'Sophisticated']
    },
    { 
      id: '13', 
      title: 'Editorial Fashion Series IV', 
      category: 'Fashion Shoot', 
      image: '/assets/Best Work of Metalogue/Fashion Shoot/4.jpg',
      client: 'Fashion Magazine',
      year: '2024',
      description: 'Avant-garde fashion shoot pushing creative boundaries.',
      tags: ['Editorial', 'Avant-garde', 'Creative']
    },
    { 
      id: '14', 
      title: 'Editorial Fashion Series V', 
      category: 'Fashion Shoot', 
      image: '/assets/Best Work of Metalogue/Fashion Shoot/7.jpg',
      client: 'Fashion Magazine',
      year: '2024',
      description: 'Classic fashion photography with timeless elegance.',
      tags: ['Editorial', 'Classic', 'Timeless']
    },
    { 
      id: '15', 
      title: 'Embroz Fashion Campaign', 
      category: 'Fashion Shoot', 
      image: '/assets/Best Work of Metalogue/Fashion Shoot/embroz.jpg',
      client: 'Embroz',
      year: '2024',
      description: 'Brand fashion campaign with lifestyle integration.',
      tags: ['Campaign', 'Lifestyle', 'Brand']
    },
    
    // Product Photography
    { 
      id: '16', 
      title: 'Product Showcase Series I', 
      category: 'Product Photography', 
      image: '/assets/Best Work of Metalogue/Product Photography/1.jpg',
      client: 'Various Brands',
      year: '2024',
      description: 'Clean product photography with professional lighting.',
      tags: ['Product', 'Commercial', 'Clean']
    },
    { 
      id: '17', 
      title: 'Product Showcase Series II', 
      category: 'Product Photography', 
      image: '/assets/Best Work of Metalogue/Product Photography/2.jpg',
      client: 'Various Brands',
      year: '2024',
      description: 'Lifestyle product photography with contextual backgrounds.',
      tags: ['Product', 'Lifestyle', 'Context']
    },
    { 
      id: '18', 
      title: 'Luxury Perfume Collection I', 
      category: 'Product Photography', 
      image: '/assets/Best Work of Metalogue/Product Photography/perfume1.png',
      client: 'Luxury Perfume Brand',
      year: '2024',
      description: 'Elegant perfume photography with sophisticated lighting.',
      tags: ['Luxury', 'Perfume', 'Elegant']
    },
    { 
      id: '19', 
      title: 'Luxury Perfume Collection II', 
      category: 'Product Photography', 
      image: '/assets/Best Work of Metalogue/Product Photography/perfume2.png',
      client: 'Luxury Perfume Brand',
      year: '2024',
      description: 'Premium fragrance photography with artistic composition.',
      tags: ['Luxury', 'Perfume', 'Artistic']
    },
    { 
      id: '20', 
      title: 'Luxury Perfume Collection III', 
      category: 'Product Photography', 
      image: '/assets/Best Work of Metalogue/Product Photography/perfume3.png',
      client: 'Luxury Perfume Brand',
      year: '2024',
      description: 'High-end perfume photography with dramatic shadows.',
      tags: ['Luxury', 'Perfume', 'Dramatic']
    },
    { 
      id: '21', 
      title: 'Brightening Skincare Products', 
      category: 'Product Photography', 
      image: '/assets/Best Work of Metalogue/Product Photography/brightening.jpg',
      client: 'Skincare Brand',
      year: '2024',
      description: 'Beauty product photography with natural aesthetics.',
      tags: ['Beauty', 'Skincare', 'Natural']
    },
    
    // SMM
    { 
      id: '22', 
      title: 'Social Media Campaign I', 
      category: 'SMM', 
      image: '/assets/Best Work of Metalogue/SMM/1.png',
      client: 'Various Brands',
      year: '2024',
      description: 'Engaging social media content with modern design.',
      tags: ['Social Media', 'Digital', 'Modern']
    },
    { 
      id: '23', 
      title: 'Social Media Campaign II', 
      category: 'SMM', 
      image: '/assets/Best Work of Metalogue/SMM/2.png',
      client: 'Various Brands',
      year: '2024',
      description: 'Creative social media graphics with bold typography.',
      tags: ['Social Media', 'Graphics', 'Bold']
    },
    { 
      id: '24', 
      title: 'Social Media Campaign III', 
      category: 'SMM', 
      image: '/assets/Best Work of Metalogue/SMM/3.png',
      client: 'Various Brands',
      year: '2024',
      description: 'Trendy social media content with contemporary aesthetics.',
      tags: ['Social Media', 'Trendy', 'Contemporary']
    },
    { 
      id: '25', 
      title: 'Social Media Campaign IV', 
      category: 'SMM', 
      image: '/assets/Best Work of Metalogue/SMM/4.png',
      client: 'Various Brands',
      year: '2024',
      description: 'Vibrant social media designs with energetic layouts.',
      tags: ['Social Media', 'Vibrant', 'Energetic']
    },
    { 
      id: '26', 
      title: 'Social Media Campaign V', 
      category: 'SMM', 
      image: '/assets/Best Work of Metalogue/SMM/5.png',
      client: 'Various Brands',
      year: '2024',
      description: 'Minimalist social media content with clean aesthetics.',
      tags: ['Social Media', 'Minimalist', 'Clean']
    },
    
    // UGC
    { 
      id: '27', 
      title: 'Hoodies Lifestyle Campaign', 
      category: 'UGC', 
      videoUrl: 'https://www.youtube.com/shorts/o79qt8uHB5U',
      isVideo: true,
      isShort: true,
      thumbnail: 'https://img.youtube.com/vi/o79qt8uHB5U/maxresdefault.jpg',
      client: 'Fashion Brand',
      year: '2024',
      description: 'Authentic user-generated content style campaign for casual wear.',
      tags: ['UGC', 'Casual', 'Authentic']
    },
    { 
      id: '28', 
      title: 'Kiwi Female Empowerment', 
      category: 'UGC', 
      videoUrl: 'https://www.youtube.com/shorts/lHWowB-y6k8',
      isVideo: true,
      isShort: true,
      thumbnail: 'https://img.youtube.com/vi/lHWowB-y6k8/maxresdefault.jpg',
      client: 'Kiwi Brand',
      year: '2024',
      description: 'Empowering female-focused content with authentic storytelling.',
      tags: ['UGC', 'Female', 'Empowerment']
    },
    { 
      id: '29', 
      title: 'Nectar UGC Campaign', 
      category: 'UGC', 
      videoUrl: 'https://www.youtube.com/shorts/ijthKIUeyOQ',
      isVideo: true,
      isShort: true,
      thumbnail: 'https://img.youtube.com/vi/ijthKIUeyOQ/maxresdefault.jpg',
      client: 'Nectar',
      year: '2024',
      description: 'User-generated style content for beverage brand.',
      tags: ['UGC', 'Beverage', 'Lifestyle']
    },
    { 
      id: '30', 
      title: 'Mahriza Lifestyle Content', 
      category: 'UGC', 
      videoUrl: 'https://www.youtube.com/shorts/o79qt8uHB5U',
      isVideo: true,
      isShort: true,
      thumbnail: 'https://img.youtube.com/vi/o79qt8uHB5U/maxresdefault.jpg',
      client: 'Mahriza',
      year: '2024',
      description: 'Lifestyle-focused user-generated content with personal touch.',
      tags: ['UGC', 'Lifestyle', 'Personal']
    },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

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
      {/* Top Spacing to separate from Services */}
      <div className="h-32 lg:h-40"></div>
      
      <section id="portfolio" className="py-32 lg:py-40 bg-brand-black-100 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-red/20"></div>
        </div>
        
        <div className="container-custom relative z-10">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h2 className="text-display text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-12 leading-[0.9]">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-body text-xl lg:text-2xl xl:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed">
              Discover our diverse range of creative work spanning advertising, branding, 
              fashion photography, product shoots, and social media content.
            </p>
          </motion.div>

          {/* Enhanced Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-24"
          >
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-brand text-white shadow-glow'
                      : 'glass-light text-white/70 hover:text-white hover:bg-white/10 border border-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-white/60 text-sm">View:</span>
              <div className="flex items-center space-x-2 glass-light rounded-lg p-1 border border-white/20">
                <motion.button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-brand-red-600 text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid3X3 size={18} />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-md transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-brand-red-600 text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <List size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* SVG Accent/Gradient behind grid */}
          <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-7xl z-0 pointer-events-none" style={{top: '-6rem', height: '20rem', position: 'absolute'}}>
            <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none"><ellipse cx="600" cy="160" rx="600" ry="120" fill="#EF4444" fillOpacity="0.07" /></svg>
          </div>
          
          {/* Portfolio Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`relative grid gap-20 xl:gap-28 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 lg:grid-cols-2'
            }`}
          >
            <AnimatePresence mode="sync">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  layout
                  className={`group relative overflow-hidden rounded-3xl glass-light hover-lift hover-glow cursor-pointer border border-white/10 p-16 xl:p-20 pb-24 flex flex-col justify-between shadow-2xl shadow-black/20 ${
                    viewMode === 'list' ? 'lg:flex-row' : ''
                  }`}
                  onClick={() => item.isVideo ? handleVideoClick(item.videoUrl!) : setSelectedItem(item)}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'lg:w-1/2' : 'aspect-[4/3]'
                  }`}>
                    {item.isVideo ? (
                      <div className={`w-full h-full relative overflow-hidden rounded-2xl ${
                        item.isShort ? 'aspect-[9/16]' : 'aspect-video'
                      }`}>
                        {/* YouTube Thumbnail */}
                        <Image
                          src={item.thumbnail || ''}
                          alt={item.title}
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
                              {item.isShort ? 'YouTube Short' : 'YouTube Video'}
                            </span>
                            <span className="text-sm text-white/90 font-medium">Click to watch</span>
                          </div>
                        </div>
                      </div>
                    ) : item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : null}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black-100/90 via-brand-black-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {item.tags?.slice(0, 2).map((tag, idx) => (
                              <span key={idx} className="text-sm bg-white/20 text-white px-4 py-2 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <ExternalLink size={20} className="text-white opacity-70" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 flex flex-col justify-between ${viewMode === 'list' ? 'lg:w-1/2' : ''}`}>
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-brand-red-600 text-sm font-medium">{item.category}</span>
                        {item.year && (
                          <span className="text-white/40 text-xs">{item.year}</span>
                        )}
                      </div>
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-6 group-hover:text-brand-red-600 transition-colors leading-tight">
                        {item.title}
                      </h3>
                      {item.client && (
                        <p className="text-white/60 text-sm mb-6">Client: {item.client}</p>
                      )}
                      {item.description && (
                        <p className="text-white/70 text-sm lg:text-base xl:text-lg line-clamp-2 group-hover:text-white/90 transition-colors mb-10 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-40"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-12 py-6 text-lg lg:text-xl"
            >
              Load More Projects
            </motion.button>
          </motion.div>
        </div>
        
        {/* Bottom Spacing */}
        <div className="h-32 lg:h-40"></div>
      </section>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full glass-light rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                {/* Media */}
                <div className="aspect-video lg:aspect-auto relative">
                  {selectedItem.isVideo ? (
                    <div className="w-full h-full bg-gradient-to-br from-brand-red/20 to-brand-red/5 border border-brand-red/20 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-24 h-24 bg-gradient-to-r from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-brand-red/30"
                      >
                        <Play size={36} className="text-white ml-1" />
                      </motion.div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                            {selectedItem.isShort ? 'YouTube Short' : 'YouTube Video'}
                          </span>
                          <span className="text-sm text-white/70">Click to watch on YouTube</span>
                        </div>
                      </div>
                    </div>
                  ) : selectedItem.image ? (
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                    />
                  ) : null}
                </div>
                
                {/* Content */}
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-brand-red-600 font-medium text-sm bg-brand-red-600/10 px-4 py-2 rounded-full">
                      {selectedItem.category}
                    </span>
                    {selectedItem.year && (
                      <span className="text-white/40 text-sm">{selectedItem.year}</span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 font-display leading-tight">
                    {selectedItem.title}
                  </h3>
                  
                  {selectedItem.client && (
                    <p className="text-white/60 mb-10 text-lg">
                      <span className="text-white/40">Client:</span> {selectedItem.client}
                    </p>
                  )}
                  
                  {selectedItem.description && (
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-12">
                      {selectedItem.description}
                    </p>
                  )}
                  
                  {selectedItem.tags && (
                    <div className="flex flex-wrap gap-3">
                      {selectedItem.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-sm bg-white/10 text-white/70 px-4 py-2 rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Portfolio; 