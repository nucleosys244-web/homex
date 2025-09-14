import { motion } from 'motion/react';
import { Search, Calendar, Wrench, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Select Service',
    description: 'Choose from our wide range of home services and browse verified professionals.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Calendar,
    title: 'Pick Slot',
    description: 'Select your preferred date and time slot that works best for your schedule.',
    color: 'from-teal-500 to-green-500',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Wrench,
    title: 'Service Delivered',
    description: 'Our verified professional arrives on time and completes the service with quality.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Star,
    title: 'Rate Us',
    description: 'Share your experience and help other customers by rating our service.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your home services done in just 4 simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm z-10 shadow-lg"
                  >
                    {index + 1}
                  </motion.div>

                  <motion.div
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className={`${step.bgColor} rounded-2xl p-8 h-full border border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute top-4 right-8 w-20 h-20 bg-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  {/* Connection Arrow - Mobile */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                      className="lg:hidden flex justify-center mt-4 mb-4"
                    >
                      <div className="w-0.5 h-8 bg-gradient-to-b from-teal-300 to-teal-500 rounded-full"></div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust us with their home services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your First Service
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}