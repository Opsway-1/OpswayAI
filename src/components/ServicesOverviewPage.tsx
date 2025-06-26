import React, { useState } from 'react';
import { MessageSquare, Bot, Workflow, Globe, ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const ServicesOverviewPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  const goToLeadGeneration = () => {
    window.location.hash = '#lead-generation';
    window.location.reload();
  };

  const goToAIVoiceChat = () => {
    window.location.hash = '#ai-voice-chat';
    window.location.reload();
  };

  const goToWorkflowAutomations = () => {
    window.location.hash = '#workflow-automations';
    window.location.reload();
  };

  const goToSmartWebsites = () => {
    window.location.hash = '#smart-websites';
    window.location.reload();
  };

  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Lead Generation",
      description: "AI-powered outreach campaigns that identify, qualify, and convert high-value prospects into customers through personalized messaging at scale.",
      features: ["Smart lead scoring", "Multi-channel outreach", "Automated follow-ups", "CRM integration"],
      color: "from-[#FF6500] to-[#ff8533]",
      action: goToLeadGeneration,
      stats: { value: "300%", label: "Lead Increase" }
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Voice & Chat Agents",
      description: "24/7 intelligent customer support agents that handle inquiries, book appointments, and provide instant responses with human-like conversation.",
      features: ["Natural language processing", "Voice & text support", "Appointment booking", "Lead qualification"],
      color: "from-blue-500 to-blue-600",
      action: goToAIVoiceChat,
      stats: { value: "24/7", label: "Always Available" }
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automations",
      description: "Streamline business processes with intelligent automation that handles repetitive tasks, manages data flow, and optimizes team productivity.",
      features: ["Process automation", "Task management", "Data synchronization", "Performance tracking"],
      color: "from-green-500 to-green-600",
      action: goToWorkflowAutomations,
      stats: { value: "80%", label: "Time Saved" }
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Smart Websites",
      description: "AI-powered websites that adapt to user behavior, optimize conversions, and integrate seamlessly with your automation systems.",
      features: ["Responsive design", "AI optimization", "Conversion tracking", "Automation integration"],
      color: "from-purple-500 to-purple-600",
      action: goToSmartWebsites,
      stats: { value: "250%", label: "Conversion Boost" }
    }
  ];

  const trustIndicators = [
    { icon: <Users className="w-5 h-5" />, value: "500+", label: "Businesses Served" },
    { icon: <Star className="w-5 h-5" />, value: "4.9/5", label: "Client Rating" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "98%", label: "Success Rate" },
    { icon: <Shield className="w-5 h-5" />, value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-[#0B192C] overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-[#FF6500]/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="pt-32 pb-20">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Content */}
              <div className="text-center mb-16">
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-8 font-montserrat"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    What We
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
                    Do
                    <motion.div 
                      className="absolute -inset-4 bg-[#FF6500]/20 blur-2xl rounded-lg opacity-50"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 font-montserrat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Comprehensive AI solutions designed to transform every aspect of your business operations with cutting-edge automation technology.
                </motion.p>

                {/* Trust Indicators */}
                <motion.div 
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {trustIndicators.map((indicator, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-[#FF6500] mb-3 flex justify-center">{indicator.icon}</div>
                      <div className="text-2xl font-bold text-white mb-2 font-montserrat">{indicator.value}</div>
                      <div className="text-white/80 text-sm font-montserrat">{indicator.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B192C] mb-6 leading-tight font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our Core Services
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                30-minute consultation, no sales pressure, actionable insights
              </motion.p>
            </div>

            {/* 2x2 Services Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#FF6500]/20 transition-all duration-400 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={service.action}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />
                  
                  {/* Stats Badge */}
                  <div className="absolute top-6 right-6 bg-gray-100 group-hover:bg-[#FF6500] text-gray-600 group-hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                    <div className="font-bold">{service.stats.value}</div>
                    <div className="text-xs">{service.stats.label}</div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-2xl font-bold text-[#0B192C] mb-4 group-hover:text-[#FF6500] transition-colors duration-300 font-montserrat"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 font-montserrat">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-[#FF6500] flex-shrink-0" />
                          <span className="text-gray-600 text-sm font-montserrat">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn more button */}
                    <button 
                      className="flex items-center text-[#FF6500] font-semibold group-hover:text-[#0B192C] transition-colors duration-300 font-montserrat"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us Section */}
            <motion.div 
              className="bg-[#F4F4F4] rounded-3xl p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl sm:text-4xl font-bold text-[#0B192C] mb-6 font-montserrat"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Why Businesses Choose OpswayAI
              </motion.h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-montserrat">
                We combine cutting-edge AI technology with practical business solutions to deliver measurable results.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: "🚀", title: "Fast Implementation", desc: "Get up and running in days, not months" },
                  { icon: "💰", title: "Proven ROI", desc: "Average 300% return on investment" },
                  { icon: "🔧", title: "Custom Solutions", desc: "Tailored to your specific business needs" },
                  { icon: "🛡️", title: "Enterprise Security", desc: "Bank-level security and compliance" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-[#0B192C] mb-2 font-montserrat">{item.title}</h4>
                    <p className="text-gray-600 text-sm font-montserrat">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={goToBookDemo}
                className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden font-montserrat"
              >
                <span className="relative z-10 flex items-center">
                  Demo Our Services
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-24 lg:py-32 bg-[#0B192C] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-[#FF6500]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Need Help Choosing
              <br />
              <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent">
                a Service?
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our experts will help you identify the perfect AI solutions for your business needs and goals.
            </motion.p>

            {/* Trust indicators */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Zap className="w-5 h-5" />, text: "Free Consultation" },
                { icon: <Star className="w-5 h-5" />, text: "Expert Guidance" },
                { icon: <Shield className="w-5 h-5" />, text: "No Commitment" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="text-[#FF6500]">{item.icon}</div>
                  <span className="text-white/90 font-semibold font-montserrat">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={goToBookDemo}
                className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-bold px-16 py-8 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6500]/40 relative overflow-hidden font-montserrat"
              >
                <span className="relative z-10 flex items-center">
                  Get Custom Demo
                  <ArrowRight className="ml-4 w-7 h-7 transition-transform group-hover:translate-x-2" />
                </span>
                
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Button>
            </motion.div>

            <motion.p 
              className="text-white/60 mt-6 font-montserrat"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              30-minute consultation • No sales pressure • Actionable insights
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesOverviewPage;