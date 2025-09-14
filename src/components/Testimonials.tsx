import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    service: 'Deep Home Cleaning',
    review: 'Absolutely fantastic service! The cleaning team was professional, thorough, and left my home spotless. Will definitely book again.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47b?w=100&h=100&fit=crop&crop=face&auto=format',
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    service: 'AC Repair',
    review: 'Quick and efficient AC repair service. The technician was knowledgeable and fixed the issue within 30 minutes. Great value for money!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format',
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    location: 'Bangalore',
    rating: 5,
    service: 'Kitchen Cleaning',
    review: 'The kitchen deep cleaning service exceeded my expectations. Every corner was cleaned and sanitized. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format',
    date: '3 days ago'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Pune',
    rating: 5,
    service: 'Plumbing Service',
    review: 'Excellent plumbing service! The plumber arrived on time, diagnosed the issue quickly, and fixed it professionally. Very satisfied.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format',
    date: '5 days ago'
  },
  {
    id: 5,
    name: 'Meera Reddy',
    location: 'Hyderabad',
    rating: 5,
    service: 'Electrical Repair',
    review: 'Professional electrician who fixed all our electrical issues safely and efficiently. Great service and reasonable pricing.',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face&auto=format',
    date: '1 week ago'
  },
  {
    id: 6,
    name: 'Arjun Kapoor',
    location: 'Chennai',
    rating: 5,
    service: 'Pest Control',
    review: 'Outstanding pest control service! They eliminated all the pests and provided great preventive tips. Highly professional team.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format',
    date: '4 days ago'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from satisfied customers across India
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 h-full border border-teal-100 shadow-xl">
                  <div className="flex flex-col md:flex-row items-center h-full">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 md:top-8 md:right-8">
                      <Quote className="w-8 h-8 text-teal-300" />
                    </div>

                    {/* Avatar Section */}
                    <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <ImageWithFallback
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-teal-500 rounded-full p-2">
                          <Star className="w-4 h-4 text-white fill-current" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Rating */}
                      <div className="flex justify-center md:justify-start items-center mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Review Text */}
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic"
                      >
                        "{testimonials[currentIndex].review}"
                      </motion.blockquote>

                      {/* Customer Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h4 className="text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-gray-500 text-sm mb-2">{testimonials[currentIndex].location}</p>
                        <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-400">
                          <span>{testimonials[currentIndex].service}</span>
                          <span>•</span>
                          <span>{testimonials[currentIndex].date}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="p-2 rounded-full border-teal-200 hover:bg-teal-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-teal-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="p-2 rounded-full border-teal-200 hover:bg-teal-50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-100"
        >
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '50,000+', label: 'Services Completed' },
            { number: '4.8★', label: 'Average Rating' },
            { number: '24/7', label: 'Customer Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl text-teal-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}