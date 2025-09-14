import { motion } from 'motion/react';
import { Star, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useServiceBooking } from '../contexts/ServiceBookingContext';
import { servicesData } from '../data/servicesData';

const popularServices = [
  {
    name: 'Deep Home Cleaning',
    description: 'Complete house cleaning with kitchen & bathroom',
    price: 'From ₹899',
    originalPrice: '₹1,299',
    rating: 4.8,
    reviews: 2456,
    duration: '3-4 hours',
    image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc1NzE3NTk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Most Popular'
  },
  {
    name: 'Bathroom Deep Cleaning',
    description: 'Professional bathroom sanitization & cleaning',
    price: 'From ₹499',
    originalPrice: '₹699',
    rating: 4.9,
    reviews: 1834,
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1714479120969-436c216a3cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1NzIzNzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Top Rated'
  },
  {
    name: 'Kitchen Deep Cleaning',
    description: 'Complete kitchen cleaning with appliances',
    price: 'From ₹699',
    originalPrice: '₹999',
    rating: 4.7,
    reviews: 1562,
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1567767326925-e2047bf469d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzU3MjM3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'AC Repair & Service',
    description: 'AC installation, repair & maintenance',
    price: 'From ₹399',
    originalPrice: '₹599',
    rating: 4.6,
    reviews: 2103,
    duration: '1-2 hours',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjByZXBhaXJ8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Electrical Repair',
    description: 'Switch, socket, fan & light repairs',
    price: 'From ₹199',
    originalPrice: '₹299',
    rating: 4.8,
    reviews: 1923,
    duration: '1-2 hours',
    image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Plumbing Service',
    description: 'Tap, pipe, toilet & drainage repairs',
    price: 'From ₹299',
    originalPrice: '₹449',
    rating: 4.7,
    reviews: 1678,
    duration: '1-2 hours',
    image: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcmVwYWlyfGVufDF8fHx8MTc1NzIzNzEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function PopularServices() {
  const { openCategories } = useServiceBooking();

  const findServiceInData = (serviceName: string) => {
    for (const mainService of servicesData) {
      for (const category of mainService.categories) {
        const service = category.services.find(s => 
          s.name.toLowerCase().includes(serviceName.toLowerCase().split(' ')[0]) ||
          serviceName.toLowerCase().includes(s.name.toLowerCase().split(' ')[0])
        );
        if (service) {
          return mainService;
        }
      }
    }
    return null;
  };
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Most Popular Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book our most requested services with verified professionals and transparent pricing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {popularServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors duration-300" />
                  
                  {/* Badge */}
                  {service.badge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                    >
                      {service.badge}
                    </motion.div>
                  )}

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-teal-600 text-sm">{service.price}</span>
                    <span className="text-gray-400 text-xs line-through ml-2">{service.originalPrice}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-xs text-gray-500">({service.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified professionals • Insured service
                  </div>

                  {/* Book Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-3 group-hover:bg-teal-700 transition-all duration-300"
                      onClick={() => {
                        const serviceData = findServiceInData(service.name);
                        if (serviceData) {
                          openCategories(serviceData);
                        }
                      }}
                    >
                      Book Now
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-teal-200 text-teal-700 hover:bg-teal-50 rounded-full px-8 py-3"
            >
              View All Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}