'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Zap, Heart, Target, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services that capture your brand\'s essence.',
      features: ['Fashion Photography', 'Product Photography', 'Lifestyle Shoots', 'Corporate Photography'],
      image: '/assets/Best Work of Metalogue/Fashion Shoot/1.jpg'
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'Dynamic video content that tells your story compellingly.',
      features: ['Commercial Videos', 'Brand Films', 'Social Media Content', 'Event Coverage'],
      image: '/assets/Best Work of Metalogue/ADs/AIRPODS 19 PRO.mp4'
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Complete brand identity solutions that make you stand out.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      image: '/assets/Best Work of Metalogue/Branding/MATALOGUE.png'
    },
    {
      icon: Zap,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive results.',
      features: ['Social Media Management', 'Content Strategy', 'Campaign Development', 'Analytics & Reporting'],
      image: '/assets/Best Work of Metalogue/SMM/1.png'
    },
    {
      icon: Heart,
      title: 'UGC Content',
      description: 'Authentic user-generated content that builds trust.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Campaign Management'],
      image: '/assets/Best Work of Metalogue/UGC/HODDIES 2.mp4'
    },
    {
      icon: Target,
      title: 'Creative Direction',
      description: 'End-to-end creative direction for comprehensive campaigns.',
      features: ['Creative Strategy', 'Art Direction', 'Project Management', 'Brand Consistency'],
      image: '/assets/Best Work of Metalogue/Fashion Shoot/3.jpg'
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

  return (
    <section id="services" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive creative services designed to elevate your brand and 
            create meaningful connections with your audience through powerful visual storytelling.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-black rounded-2xl p-8 hover-lift group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-2xl mb-6 group-hover:bg-brand-red/20 transition-colors">
                <service.icon size={32} className="text-brand-red" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-300">
                    <Check size={16} className="text-brand-red flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 text-brand-red font-medium group-hover:text-white transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Our <span className="gradient-text">Process</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We follow a proven process to ensure exceptional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-red/20 transform translate-x-8"></div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
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
          className="text-center bg-brand-black rounded-2xl p-12"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our comprehensive creative services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 