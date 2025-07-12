'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Twitter, Facebook, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    project: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.project.trim()) {
      newErrors.project = 'Project type is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      project: '',
      message: ''
    });
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@metalogue.studio',
      href: 'mailto:hello@metalogue.studio',
      description: 'Drop us a line anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Studio',
      value: 'Downtown Creative District',
      location: 'New York, NY 10013',
      href: '#',
      description: 'Come visit our creative space'
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon-Fri: 9AM-6PM',
      extra: 'Sat: 10AM-4PM',
      href: '#',
      description: 'We\'re here when you need us'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/metalogue', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, href: 'https://twitter.com/metalogue', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Facebook, href: 'https://facebook.com/metalogue', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Linkedin, href: 'https://linkedin.com/company/metalogue', label: 'LinkedIn', color: 'hover:text-blue-500' }
  ];

  const projectTypes = [
    'Brand Identity & Logo Design',
    'Website & Digital Design',
    'Photography & Videography',
    'Social Media Campaign',
    'Product Launch Campaign',
    'Full Brand Package',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
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
    <section id="contact" className="py-24 lg:py-32 bg-brand-gray-850">
      <div className="container-custom">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-display text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[0.9]">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-body text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
            Ready to bring your vision to life? Get in touch with us and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 lg:gap-20">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="xl:col-span-3"
          >
            <div className="glass-light rounded-3xl p-8 lg:p-12 border border-white/10">
              <h3 className="text-display text-3xl lg:text-4xl font-bold text-white mb-8">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-brand-black-100 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/20 hover:border-white/40'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center space-x-1"
                      >
                        <AlertCircle size={14} />
                        <span>{errors.name}</span>
                      </motion.p>
                    )}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-brand-black-100 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/20 hover:border-white/40'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center space-x-1"
                      >
                        <AlertCircle size={14} />
                        <span>{errors.email}</span>
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-brand-black-100 border border-white/20 hover:border-white/40 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-brand-black-100 border border-white/20 hover:border-white/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-brand-black-100">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Project Type */}
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-white/80 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-brand-black-100 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors ${
                      errors.project ? 'border-red-500' : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-brand-black-100">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.project && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1 flex items-center space-x-1"
                    >
                      <AlertCircle size={14} />
                      <span>{errors.project}</span>
                    </motion.p>
                  )}
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-brand-black-100 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-white/20 hover:border-white/40'
                    }`}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1 flex items-center space-x-1"
                    >
                      <AlertCircle size={14} />
                      <span>{errors.message}</span>
                    </motion.p>
                  )}
                </div>
                
                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <div className="loading-dots">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
                
                {/* Success/Error Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-xl border border-green-400/20"
                    >
                      <CheckCircle size={20} />
                      <span>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="xl:col-span-2 space-y-8"
          >
            {/* Contact Details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-display text-2xl lg:text-3xl font-bold text-white mb-8">
                Get in Touch
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-light rounded-2xl p-6 hover-lift group border border-white/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center shadow-glow">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-white/80 font-medium">{info.value}</p>
                      {info.location && (
                        <p className="text-white/60 text-sm">{info.location}</p>
                      )}
                      {info.extra && (
                        <p className="text-white/60 text-sm">{info.extra}</p>
                      )}
                      <p className="text-white/50 text-sm mt-2">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-light rounded-2xl p-6 border border-white/10"
            >
              <h4 className="text-xl font-semibold text-white mb-6">Follow Our Journey</h4>
              <div className="grid grid-cols-2 gap-4">
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
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 bg-white/5 rounded-xl text-white/70 hover:text-white ${social.color} transition-colors border border-white/10 hover:border-white/30`}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-light rounded-2xl p-6 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red-600/10 to-transparent"></div>
              <div className="relative">
                <h4 className="text-xl font-semibold text-white mb-4">Why Choose Metalogue?</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-brand-red-600 flex-shrink-0" />
                    <span>5+ years of creative excellence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-brand-red-600 flex-shrink-0" />
                    <span>150+ successful projects delivered</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-brand-red-600 flex-shrink-0" />
                    <span>Award-winning creative team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-brand-red-600 flex-shrink-0" />
                    <span>24/7 project support</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 