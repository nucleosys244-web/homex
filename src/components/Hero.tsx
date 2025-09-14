import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Sparkles, Home, Zap, Wrench, Hammer, Bug, Droplet, ChefHat, Star, Shield, Clock, Award } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useServiceBooking } from '../contexts/ServiceBookingContext';
import { servicesData } from '../data/servicesData';

const services = [
  { 
    name: 'Home Cleaning', 
    icon: Home, 
    color: 'from-blue-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc1NzE3NTk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Bathroom Cleaning', 
    icon: Droplet, 
    color: 'from-teal-400 to-blue-500',
    image: 'https://images.unsplash.com/photo-1714479120969-436c216a3cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1NzIzNzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Kitchen Cleaning', 
    icon: ChefHat, 
    color: 'from-green-400 to-teal-500',
    image: 'https://images.unsplash.com/photo-1567767326925-e2047bf469d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzU3MjM3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Appliance Repair', 
    icon: Wrench, 
    color: 'from-orange-400 to-red-500',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjByZXBhaXJ8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Electrician', 
    icon: Zap, 
    color: 'from-yellow-400 to-orange-500',
    image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Plumber', 
    icon: Droplet, 
    color: 'from-indigo-400 to-purple-500',
    image: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcmVwYWlyfGVufDF8fHx8MTc1NzIzNzEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Carpenter', 
    icon: Hammer, 
    color: 'from-amber-400 to-orange-500',
    image: 'https://images.unsplash.com/photo-1626081062126-d3b192c1fcb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya3xlbnwxfHx8fDE3NTcyMDU5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Pest Control', 
    icon: Bug, 
    color: 'from-red-400 to-pink-500',
    image: 'https://images.unsplash.com/photo-1632982892992-159aca0ac9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const { openCategories } = useServiceBooking();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-16 pb-20">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDA5IiBmaWxsLW9wYWNpdHk9IjAuMDIiPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI1Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        {/* Subtle floating elements */}
        <motion.div
          className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full opacity-30 blur-2xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-25 blur-xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)]"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          
          {/* Left Side - Animated Services */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100, rotateY: -15 },
              visible: { 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                  staggerChildren: 0.15
                }
              }
            }}
            className="order-2 lg:order-1"
          >
            {/* Simple Section Header */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl text-gray-900 mb-3">
                All Services
              </h2>
              <motion.div
                className="h-1 w-16 bg-teal-500 rounded-full mb-3"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <p className="text-gray-600 leading-relaxed">
                Choose from our expert services
              </p>
            </motion.div>

            {/* Simple Service Cards Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.name}
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        y: 30
                      },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{ 
                      y: -6, 
                      scale: 1.02,
                      transition: { 
                        duration: 0.3
                      }
                    }}
                    className="group cursor-pointer"
                    onClick={() => {
                      const serviceData = servicesData.find(s => s.name === service.name);
                      if (serviceData) {
                        openCategories(serviceData);
                      }
                    }}
                  >
                    <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                      <div className="relative mb-3">
                        <motion.div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <motion.div
                          className="absolute -top-1 -right-1 w-5 h-5 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                        >
                          <Sparkles className="w-3 h-3 text-white" />
                        </motion.div>
                      </div>
                      
                      <h3 className="text-sm text-gray-900 mb-1 group-hover:text-teal-700 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        Professional service
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Main Content with Premium Design */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100, rotateY: 15 },
              visible: { 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                  staggerChildren: 0.2
                }
              }
            }}
            className="order-1 lg:order-2 relative"
          >
            {/* Simple Trust Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex justify-start mb-1"
            >
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-teal-100">
                <Sparkles className="w-4 h-4 text-teal-600 mr-2" />
                <span className="text-sm text-teal-700">Trusted by 10,000+ customers</span>
              </div>
            </motion.div>

            {/* Simple Hero Headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight"
            >
              Trusted Home Services
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                at Your Doorstep
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Verified professionals, transparent pricing, and fast booking.
              Your home deserves the best care.
            </motion.p>

            {/* Simple Action Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Service Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-teal-200 text-teal-700 hover:bg-teal-50 rounded-full px-8 py-3 text-lg"
                >
                  View All Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Simple Images Gallery */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721042235332-45f89689cfba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWUlMjBzZXJ2aWNlc3xlbnwxfHx8fDE3NTcyMzc1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy family enjoying clean home"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover:from-black/30 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm backdrop-blur-sm bg-white/20 px-3 py-1 rounded-full">
                    Happy Customers
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlJTIwd29ya2VyfGVufDF8fHx8MTc1NzIzNzUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional service worker"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover:from-black/30 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm backdrop-blur-sm bg-white/20 px-3 py-1 rounded-full">
                    Expert Professionals
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Simple Stats */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200"
            >
              {[
                { number: '10K+', label: 'Happy Customers' },
                { number: '4.8★', label: 'Rating' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-xl md:text-2xl text-teal-600 mb-1">{stat.number}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}