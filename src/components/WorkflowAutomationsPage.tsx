import React, { useState, useEffect } from 'react';
import { CheckCircle, Workflow, Clock, Users, TrendingUp, Mail, Calendar, Database, Bot, ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const WorkflowAutomationsPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  const benefits = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Intelligent data synchronization",
      description: "Automatically sync customer data across all your business systems, ensuring consistency and eliminating manual data entry errors."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-based automation triggers",
      description: "Set up smart workflows that trigger based on time, events, or customer actions to maintain perfect timing in your operations."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Custom workflow builder",
      description: "Design complex automation workflows with our intuitive drag-and-drop interface, no coding required for powerful business logic."
    }
  ];

  const automations = [
    {
      title: "CRM Updates",
      description: "Automatically update customer records, track interactions, and maintain clean data across your entire sales pipeline.",
      icon: "📊",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Appointment Confirmations",
      description: "Send automated reminders, confirmations, and follow-ups for all scheduled meetings and appointments.",
      icon: "📅",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Follow-up Emails",
      description: "Intelligent email sequences that adapt based on customer behavior and engagement patterns.",
      icon: "📧",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Invoice Processing",
      description: "Automate invoice generation, payment tracking, and financial reporting for seamless accounting workflows.",
      icon: "💰",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Task Assignment",
      description: "Automatically assign tasks to team members based on workload, expertise, and availability.",
      icon: "✅",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Report Generation",
      description: "Generate and distribute automated reports with real-time data and customizable insights.",
      icon: "📈",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const stats = [
    { value: "80%", label: "Time Saved on Manual Tasks", icon: <Clock className="w-5 h-5" /> },
    { value: "95%", label: "Accuracy Improvement", icon: <CheckCircle className="w-5 h-5" /> },
    { value: "50+", label: "Workflow Templates", icon: <Workflow className="w-5 h-5" /> },
    { value: "24/7", label: "Automated Operations", icon: <Zap className="w-5 h-5" /> }
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
          
          {/* Mouse-following gradient */}
          <motion.div 
            className="absolute w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
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
                    Automate the Busywork,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
                    Focus on Growth
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
                  Transform repetitive tasks into intelligent workflows that run themselves. Our automation platform handles the routine work so your team can focus on what matters most.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button
                    onClick={goToBookDemo}
                    className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold px-12 py-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden font-montserrat"
                  >
                    <span className="relative z-10 flex items-center">
                      Demo Automation
                      <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  </Button>
                </motion.div>

                {/* Stats Grid */}
                <motion.div 
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-[#FF6500] mb-3 flex justify-center">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white mb-2 font-montserrat">{stat.value}</div>
                      <div className="text-white/80 text-sm font-montserrat">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Benefits */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {/* Icon Badge */}
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF6500] rounded-xl flex items-center justify-center text-white shadow-lg">
                        {benefit.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0B192C] mb-2 font-montserrat">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-montserrat">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional CTA */}
                <motion.div 
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    onClick={goToBookDemo}
                    className="group bg-[#0B192C] hover:bg-[#0B192C]/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden font-montserrat"
                  >
                    <span className="relative z-10 flex items-center">
                      Build My Automation
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Workflow Visualization */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative bg-gradient-to-br from-[#0B192C] to-[#1a2b4a] rounded-3xl p-12 shadow-2xl overflow-hidden">
                  {/* Background elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 right-8 w-32 h-32 bg-[#FF6500]/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-8 left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                  </div>

                  {/* Workflow visualization */}
                  <div className="relative z-10 space-y-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-[#FF6500] rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                      </div>
                      <div className="text-white/60 text-sm font-montserrat">Workflow Builder</div>
                    </div>
                    
                    {/* Workflow steps */}
                    <div className="space-y-4">
                      {[
                        { step: "1", title: "Trigger Event", desc: "New customer signup", color: "bg-green-500" },
                        { step: "2", title: "Update CRM", desc: "Add to customer database", color: "bg-blue-500" },
                        { step: "3", title: "Send Welcome Email", desc: "Automated onboarding sequence", color: "bg-purple-500" },
                        { step: "4", title: "Schedule Follow-up", desc: "Book discovery call", color: "bg-[#FF6500]" }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                          <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold font-montserrat`}>
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-semibold font-montserrat text-sm">{item.title}</div>
                            <div className="text-white/70 text-xs font-montserrat">{item.desc}</div>
                          </div>
                          {index < 3 && (
                            <ArrowRight className="w-4 h-4 text-white/50" />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-white/80 text-sm font-montserrat">Workflow Status</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white/90 text-sm font-montserrat">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-16 left-16 w-4 h-4 bg-[#FF6500]/60 rounded-full animate-float" />
                  <div className="absolute bottom-20 right-20 w-6 h-6 border-2 border-white/30 rounded-lg rotate-12 animate-float-delayed" />
                </div>

                {/* Floating stats around visualization */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Workflow className="w-5 h-5 text-[#FF6500]" />
                    <div>
                      <div className="text-[#0B192C] font-bold text-sm font-montserrat">127</div>
                      <div className="text-gray-600 text-xs font-montserrat">Active Workflows</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="text-[#0B192C] font-bold text-sm font-montserrat">99.8%</div>
                      <div className="text-gray-600 text-xs font-montserrat">Success Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Automations Features Section */}
      <section className="py-24 lg:py-32 bg-[#F4F4F4]">
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
                Powerful Automations for
                <br />
                <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent">
                  Every Business Process
                </span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                No setup fees, 30-day free trial, cancel anytime
              </motion.p>
            </div>

            {/* Automations Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automations.map((automation, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#FF6500]/20 transition-all duration-400 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Automation Icon */}
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {automation.icon}
                  </div>
                  
                  {/* Automation Content */}
                  <h3 className="text-xl font-bold text-[#0B192C] mb-4 group-hover:text-[#FF6500] transition-colors duration-300 font-montserrat">
                    {automation.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-montserrat">
                    {automation.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 lg:py-32 bg-[#FF6500] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
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
              Ready to Streamline
              <br />
              Your Operations?
            </motion.h2>

            <motion.p 
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of businesses already saving time and increasing efficiency with intelligent workflow automation.
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
                { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security" },
                { icon: <Star className="w-5 h-5" />, text: "5-Star Support" },
                { icon: <Clock className="w-5 h-5" />, text: "Quick Setup" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="text-white">{item.icon}</div>
                  <span className="text-white font-semibold font-montserrat">{item.text}</span>
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
                className="group bg-white hover:bg-white/90 text-[#FF6500] font-bold px-16 py-8 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden font-montserrat"
              >
                <span className="relative z-10 flex items-center">
                  Get Automation Demo
                  <ArrowRight className="ml-4 w-7 h-7 transition-transform group-hover:translate-x-2" />
                </span>
                
                <div className="absolute inset-0 bg-[#FF6500]/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Button>
            </motion.div>

            <motion.p 
              className="text-white/80 mt-6 font-montserrat"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              No setup fees • 30-day free trial • Cancel anytime
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkflowAutomationsPage;