'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = {
    services: {
      title: 'Services',
      links: [
        { name: 'Brand Identity & Logo Design', href: '#services' },
        { name: 'Photography & Videography', href: '#services' },
        { name: 'Digital Marketing', href: '#services' },
        { name: 'Social Media Management', href: '#services' },
        { name: 'UGC Content Creation', href: '#services' },
        { name: 'Creative Direction', href: '#services' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Portfolio', href: '#portfolio' },
        { name: 'Case Studies', href: '#portfolio' },
        { name: 'Client Testimonials', href: '#about' },
        { name: 'Careers', href: '#contact' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#', external: true },
        { name: 'Terms of Service', href: '#', external: true },
        { name: 'Cookie Policy', href: '#', external: true },
        { name: 'GDPR Compliance', href: '#', external: true }
      ]
    }
  };

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/metalogue_/?hl=en', 
      label: 'Instagram',
      color: 'hover:text-pink-400',
      followers: '12.5K'
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/profile.php?id=61564221756891#', 
      label: 'Facebook',
      color: 'hover:text-blue-600',
      followers: '15.1K'
    }
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      text: 'Zulqafilammer@gmail.com', 
      href: 'mailto:Zulqafilammer@gmail.com',
      label: 'Email Us'
    },
    { 
      icon: Phone, 
      text: '+92 335 833 3027', 
      href: 'tel:+923358333027',
      label: 'Call Us'
    },
    { 
      icon: MapPin, 
      text: 'F10 Markaz Islamabad Pakistan', 
      href: '#',
      label: 'Visit Us'
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-brand-black-100 border-t border-white/10">
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Section */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                {/* Logo */}
                <div className="flex items-center space-x-3 group cursor-pointer" onClick={scrollToTop}>
                  <div className="relative w-10 h-10">
                    <Image
                      src="/assets/Best Work of Metalogue/Branding/MATALOGUE.png"
                      alt="Metalogue Logo"
                      fill
                      className="object-contain group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <span className="text-2xl font-display font-bold text-white">METALOGUE</span>
                </div>
                
                {/* Description */}
                <p className="text-body text-white/70 leading-relaxed max-w-md">
                  Crafting compelling visual narratives that captivate, inspire, and elevate brands 
                  through innovative storytelling and cutting-edge creative solutions.
                </p>
                
                {/* Awards/Recognition */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm">Recognition</h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="glass-light px-3 py-1 rounded-full border border-white/20">
                      <span className="text-xs text-white/80">Awwwards Winner</span>
                    </div>
                    <div className="glass-light px-3 py-1 rounded-full border border-white/20">
                      <span className="text-xs text-white/80">CSS Design Awards</span>
                    </div>
                    <div className="glass-light px-3 py-1 rounded-full border border-white/20">
                      <span className="text-xs text-white/80">Design Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">{footerSections.services.title}</h4>
              <ul className="space-y-3">
                {footerSections.services.links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/60 hover:text-white transition-colors duration-200 text-sm group flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <span>{link.name}</span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company & Contact */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">{footerSections.company.title}</h4>
                <ul className="space-y-3">
                  {footerSections.company.links.map((link) => (
                    <li key={link.name}>
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm group flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <span>{link.name}</span>
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <li key={index}>
                      <motion.a
                        href={info.href}
                        className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors duration-200 group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-brand-red-600/20 transition-colors">
                          <info.icon size={14} className="text-brand-red-600" />
                        </div>
                        <div>
                          <div className="text-xs text-white/40">{info.label}</div>
                          <div className="text-sm">{info.text}</div>
                        </div>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 text-center lg:text-left">Follow Our Creative Journey</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`group relative w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/60 hover:text-white ${social.color} transition-all duration-300 border border-white/10 hover:border-white/30`}
                  >
                    <social.icon size={18} />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-brand-black-100 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.followers}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 bg-gradient-brand rounded-xl px-6 py-3 text-white font-medium shadow-glow hover:shadow-glow-lg transition-all group"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 text-white/40 text-sm"
            >
              <span>© 2024 Metalogue Studio. All rights reserved.</span>
              <span>Made with</span>
              <Heart size={14} className="text-brand-red-600 animate-pulse" />
              <span>in Islamabad</span>
            </motion.div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {footerSections.legal.links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 