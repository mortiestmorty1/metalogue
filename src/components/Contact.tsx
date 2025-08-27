'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
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
    
    // Create mailto link with form data
    const subject = `New Project Inquiry: ${formData.project}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nBudget: ${formData.budget}\nProject Type: ${formData.project}\n\nMessage:\n${formData.message}`;
    
    const mailtoLink = `mailto:Zulqafilammer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
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
      value: 'Zulqafilammer@gmail.com',
      href: 'mailto:Zulqafilammer@gmail.com',
      description: 'Drop us a line anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 335 833 3027',
      href: 'tel:+923358333027',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Studio',
      value: 'F10 Markaz Islamabad Pakistan',
      href: '#',
      description: 'Visit our creative studio'
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
    <section id="contact" className="py-32 lg:py-40 bg-brand-gray-850">
      <div className="container-custom">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-24"
        >
          <h2 className="text-display text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-12 leading-[0.9]">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-body text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
            Ready to bring your vision to life? Get in touch with us and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-20 lg:gap-24">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="xl:col-span-3"
          >
            <div className="glass-light rounded-3xl p-10 lg:p-16 border border-white/10">
              <h3 className="text-display text-3xl lg:text-4xl font-bold text-white mb-12">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-4">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-5 bg-brand-black-100 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/20 hover:border-white/40'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-3 flex items-center space-x-1"
                      >
                        <AlertCircle size={14} />
                        <span>{errors.name}</span>
                      </motion.p>
                    )}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-4">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-5 bg-brand-black-100 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/20 hover:border-white/40'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-3 flex items-center space-x-1"
                      >
                        <AlertCircle size={14} />
                        <span>{errors.email}</span>
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-4">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-brand-black-100 border border-white/20 hover:border-white/40 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-4">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-brand-black-100 border border-white/20 hover:border-white/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors"
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
                  <label htmlFor="project" className="block text-sm font-medium text-white/80 mb-4">
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-5 bg-brand-black-100 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors ${
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
                      className="text-red-400 text-sm mt-3 flex items-center space-x-1"
                    >
                      <AlertCircle size={14} />
                      <span>{errors.project}</span>
                    </motion.p>
                  )}
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-4">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={8}
                    className={`w-full px-6 py-5 bg-brand-black-100 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red-600 transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-white/20 hover:border-white/40'
                    }`}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-3 flex items-center space-x-1"
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
                  className="w-full btn-primary text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 mt-12"
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
                      className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-6 rounded-xl border border-green-400/20"
                    >
                      <CheckCircle size={20} />
                      <span>Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.</span>
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
            className="xl:col-span-2 space-y-12"
          >
            {/* Contact Details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-display text-2xl lg:text-3xl font-bold text-white mb-10">
                Get in Touch
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-light rounded-2xl p-8 hover-lift group border border-white/10"
                >
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center shadow-glow">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2 text-lg">{info.title}</h4>
                      <p className="text-white/80 font-medium text-base">{info.value}</p>
                      {info.extra && (
                        <p className="text-white/60 text-sm mt-1">{info.extra}</p>
                      )}
                      <p className="text-white/50 text-sm mt-3">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 