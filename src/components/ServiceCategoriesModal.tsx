import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { MainService, ServiceCategory } from './ServiceBookingFlow';

interface ServiceCategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: MainService | null;
  onCategorySelect: (service: MainService, category: ServiceCategory) => void;
}

export function ServiceCategoriesModal({ 
  isOpen, 
  onClose, 
  service, 
  onCategorySelect 
}: ServiceCategoriesModalProps) {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="px-6 py-4 border-b bg-gradient-to-r from-gray-50 to-blue-50 flex-shrink-0">
            <div className="text-center">
              <DialogTitle className="text-2xl text-gray-900 mb-2">
                {service.name}
              </DialogTitle>
              <DialogDescription className="text-base text-gray-600">
                Choose your service category to get started
              </DialogDescription>
            </div>
          </DialogHeader>

          {/* Categories Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {service.categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -4,
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => {
                    onCategorySelect(service, category);
                  }}
                  className="cursor-pointer group"
                >
                  <Card className="h-full p-4 hover:shadow-lg transition-all duration-300 border-2 hover:border-teal-200 bg-white">
                    {/* Category Icon */}
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                    </div>

                    {/* Category Info */}
                    <div className="text-center">
                      <h3 className="text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed mb-3 min-h-[2.5rem] line-clamp-3">
                        {category.description}
                      </p>
                      
                      {/* Services Count */}
                      <div className="flex items-center justify-center text-teal-600 text-xs mb-3">
                        <span className="bg-teal-50 px-2 py-1 rounded-full">
                          {category.services.length} services
                        </span>
                      </div>

                      {/* Action Button */}
                      <div className="flex items-center justify-center text-teal-600 group-hover:text-teal-700 transition-colors">
                        <span className="text-xs font-medium">Explore Services</span>
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Service Info Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-6 p-4 bg-gray-50 rounded-lg max-w-2xl mx-auto"
            >
              <h4 className="text-base text-gray-900 mb-2">Why Choose Our {service.name}?</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-600">
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Verified Professionals
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Transparent Pricing
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  100% Satisfaction Guarantee
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}