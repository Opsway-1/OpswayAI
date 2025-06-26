import React, { useEffect } from 'react';
import { Calendar, CheckCircle, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ScheduleCallSection = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const goToScheduleCall = () => {
    window.location.hash = '#schedule-call';
    window.location.reload();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 100);
  };

  const benefits = [
    "30-minute strategy session",
    "Specific use cases mapped to your workflow"
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative">
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
              Let's Schedule a Call
            </motion.h2>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Text Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl sm:text-4xl font-bold text-[#0B192C] leading-tight font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Talk to Our Automation Experts
              </motion.h3>

              <motion.p 
                className="text-lg text-gray-600 leading-relaxed font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Walk away with a clear understanding of how AI fits into your business and a real plan to move forward.
              </motion.p>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#FF6500] flex-shrink-0" />
                    <span className="text-lg text-gray-700 font-montserrat">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div 
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={goToScheduleCall}
                  className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-bold px-12 py-6 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden font-montserrat"
                >
                  <span className="relative z-10 flex items-center">
                    <Calendar className="mr-3 w-6 h-6 transition-transform group-hover:scale-110" />
                    Schedule Strategy Call
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </Button>
              </motion.div>

              {/* Confirmation Message */}
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-semibold font-montserrat">
                    We'll reach out within 12 hours.
                  </p>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="grid grid-cols-3 gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: <Users className="w-5 h-5" />, value: "500+", label: "Clients Served" },
                  { icon: <CheckCircle className="w-5 h-5" />, value: "98%", label: "Success Rate" },
                  { icon: <Clock className="w-5 h-5" />, value: "30min", label: "Call Duration" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center bg-[#F4F4F4] rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-[#FF6500] mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-xl font-bold text-[#0B192C] font-montserrat">{stat.value}</div>
                    <div className="text-gray-600 text-sm font-montserrat">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Calendly Widget */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Widget Header */}
                <div className="bg-gradient-to-r from-[#0B192C] to-[#1a2b4a] px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#FF6500] rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-montserrat">Schedule Your Call</h4>
                      <p className="text-white/80 text-sm font-montserrat">Choose a time that works for you</p>
                    </div>
                  </div>
                </div>

                {/* Calendly Widget */}
                <div className="p-4">
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/erjonkrasniqi121?hide_landing_page_details=1&hide_gdpr_banner=1" 
                    style={{ minWidth: '320px', height: '700px' }}
                  />
                </div>
              </div>

              {/* Floating elements around widget */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[#FF6500]" />
                  <div>
                    <div className="text-[#0B192C] font-bold text-sm font-montserrat">Free</div>
                    <div className="text-gray-600 text-xs font-montserrat">Consultation</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-[#0B192C] font-bold text-sm font-montserrat">30min</div>
                    <div className="text-gray-600 text-xs font-montserrat">Strategy Call</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCallSection;