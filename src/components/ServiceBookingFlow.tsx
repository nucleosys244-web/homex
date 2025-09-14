import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { 
  ArrowLeft, 
  ArrowRight, 
  Star, 
  Clock, 
  Shield, 
  MapPin, 
  Calendar as CalendarIcon,
  User,
  Phone,
  Mail,
  CheckCircle,
  Plus,
  Minus,
  Info
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { format } from '../utils/date';

export interface ServiceOption {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  includes: string[];
  addOns?: {
    id: string;
    name: string;
    price: number;
    description: string;
  }[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  services: ServiceOption[];
}

export interface MainService {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  image: string;
  categories: ServiceCategory[];
}

interface ServiceBookingFlowProps {
  isOpen: boolean;
  onClose: () => void;
  service: MainService | null;
}

export function ServiceBookingFlow({ isOpen, onClose, service }: ServiceBookingFlowProps) {
  const [currentStep, setCurrentStep] = useState<'categories' | 'services' | 'details' | 'booking' | 'confirmation'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    specialInstructions: ''
  });

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM', 
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM'
  ];

  const handleClose = () => {
    setCurrentStep('categories');
    setSelectedCategory(null);
    setSelectedService(null);
    setSelectedAddOns([]);
    setSelectedDate(undefined);
    setSelectedTimeSlot('');
    setQuantity(1);
    setCustomerInfo({
      name: '',
      phone: '',
      email: '',
      address: '',
      specialInstructions: ''
    });
    onClose();
  };

  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    let total = selectedService.price * quantity;
    
    selectedAddOns.forEach(addOnId => {
      const addOn = selectedService.addOns?.find(a => a.id === addOnId);
      if (addOn) {
        total += addOn.price * quantity;
      }
    });
    
    return total;
  };

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="p-6 pb-4 border-b">
            <div className="flex items-center space-x-4">
              {currentStep !== 'categories' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (currentStep === 'services') setCurrentStep('categories');
                    else if (currentStep === 'details') setCurrentStep('services');
                    else if (currentStep === 'booking') setCurrentStep('details');
                  }}
                  className="p-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              )}
              <div>
                <DialogTitle className="text-2xl text-gray-900">
                  {currentStep === 'categories' && service.name}
                  {currentStep === 'services' && selectedCategory?.name}
                  {currentStep === 'details' && selectedService?.name}
                  {currentStep === 'booking' && 'Book Your Service'}
                  {currentStep === 'confirmation' && 'Booking Confirmed!'}
                </DialogTitle>
                <DialogDescription className="text-gray-600 mt-1">
                  {currentStep === 'categories' && 'Choose your service category'}
                  {currentStep === 'services' && 'Select your preferred service'}
                  {currentStep === 'details' && 'Customize your service'}
                  {currentStep === 'booking' && 'Enter your details'}
                  {currentStep === 'confirmation' && 'Your booking has been confirmed'}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Progress Indicator */}
          <div className="px-6 py-3 bg-gray-50">
            <div className="flex items-center space-x-2">
              {['Categories', 'Services', 'Details', 'Booking'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    index < ['categories', 'services', 'details', 'booking'].indexOf(currentStep) + 1
                      ? 'bg-teal-500 text-white'
                      : index === ['categories', 'services', 'details', 'booking'].indexOf(currentStep)
                      ? 'bg-teal-100 text-teal-600 border-2 border-teal-500'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`ml-2 text-sm ${
                    index <= ['categories', 'services', 'details', 'booking'].indexOf(currentStep)
                      ? 'text-gray-900'
                      : 'text-gray-400'
                  }`}>
                    {step}
                  </span>
                  {index < 3 && <ArrowRight className="w-4 h-4 text-gray-300 mx-3" />}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Categories */}
              {currentStep === 'categories' && (
                <motion.div
                  key="categories"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.categories.map((category) => (
                      <motion.div
                        key={category.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentStep('services');
                        }}
                        className="cursor-pointer group"
                      >
                        <Card className="p-4 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-teal-200">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-2xl">{category.icon}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                                {category.name}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                {category.description}
                              </p>
                              <div className="flex items-center text-teal-600 text-sm">
                                <span>{category.services.length} services available</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Services */}
              {currentStep === 'services' && selectedCategory && (
                <motion.div
                  key="services"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {selectedCategory.services.map((serviceOption) => (
                      <motion.div
                        key={serviceOption.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedService(serviceOption);
                          setCurrentStep('details');
                        }}
                        className="cursor-pointer group"
                      >
                        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200">
                          <div className="relative h-48">
                            <ImageWithFallback
                              src={serviceOption.image}
                              alt={serviceOption.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                              <span className="text-teal-600 text-lg">₹{serviceOption.price}</span>
                              {serviceOption.originalPrice && (
                                <span className="text-gray-400 text-sm line-through ml-2">₹{serviceOption.originalPrice}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="p-4">
                            <h3 className="text-xl text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                              {serviceOption.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              {serviceOption.description}
                            </p>
                            
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm">{serviceOption.rating}</span>
                                <span className="text-xs text-gray-500">({serviceOption.reviews} reviews)</span>
                              </div>
                              <div className="flex items-center text-gray-500 text-sm">
                                <Clock className="w-4 h-4 mr-1" />
                                {serviceOption.duration}
                              </div>
                            </div>

                            <div className="space-y-2 mb-4">
                              <h4 className="text-sm text-gray-900">Includes:</h4>
                              <ul className="text-xs text-gray-600 space-y-1">
                                {serviceOption.includes.slice(0, 3).map((item, index) => (
                                  <li key={index} className="flex items-center">
                                    <CheckCircle className="w-3 h-3 text-teal-500 mr-2 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                                {serviceOption.includes.length > 3 && (
                                  <li className="text-teal-600">+{serviceOption.includes.length - 3} more items</li>
                                )}
                              </ul>
                            </div>

                            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white group-hover:bg-teal-700 transition-all duration-300">
                              Select Service
                            </Button>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Service Details & Customization */}
              {currentStep === 'details' && selectedService && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Service Summary */}
                    <div className="lg:col-span-2 space-y-6">
                      <Card className="p-4">
                        <div className="flex items-start space-x-4">
                          <ImageWithFallback
                            src={selectedService.image}
                            alt={selectedService.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl text-gray-900 mb-2">{selectedService.name}</h3>
                            <p className="text-gray-600 text-sm mb-3">{selectedService.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                {selectedService.rating} ({selectedService.reviews} reviews)
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {selectedService.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>

                      {/* Quantity Selection */}
                      <Card className="p-4">
                        <h4 className="text-lg text-gray-900 mb-4">Quantity</h4>
                        <div className="flex items-center space-x-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            disabled={quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="text-lg font-medium px-4">{quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </Card>

                      {/* Add-ons */}
                      {selectedService.addOns && selectedService.addOns.length > 0 && (
                        <Card className="p-4">
                          <h4 className="text-lg text-gray-900 mb-4">Add-on Services</h4>
                          <div className="space-y-3">
                            {selectedService.addOns.map((addOn) => (
                              <div
                                key={addOn.id}
                                className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                  selectedAddOns.includes(addOn.id)
                                    ? 'border-teal-500 bg-teal-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                                onClick={() => handleAddOnToggle(addOn.id)}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <h5 className="font-medium text-gray-900">{addOn.name}</h5>
                                    <p className="text-sm text-gray-600 mt-1">{addOn.description}</p>
                                  </div>
                                  <div className="text-right ml-4">
                                    <span className="text-teal-600 font-medium">+₹{addOn.price}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </Card>
                      )}

                      {/* What's Included */}
                      <Card className="p-4">
                        <h4 className="text-lg text-gray-900 mb-4">What's Included</h4>
                        <ul className="space-y-2">
                          {selectedService.includes.map((item, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>

                    {/* Pricing Summary */}
                    <div className="lg:col-span-1">
                      <Card className="p-4 sticky top-4">
                        <h4 className="text-lg text-gray-900 mb-4">Pricing Summary</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Service</span>
                            <span>₹{selectedService.price} × {quantity}</span>
                          </div>
                          {selectedAddOns.map(addOnId => {
                            const addOn = selectedService.addOns?.find(a => a.id === addOnId);
                            return addOn ? (
                              <div key={addOnId} className="flex justify-between text-sm">
                                <span className="text-gray-600">{addOn.name}</span>
                                <span>₹{addOn.price} × {quantity}</span>
                              </div>
                            ) : null;
                          })}
                          <Separator />
                          <div className="flex justify-between text-lg font-medium">
                            <span>Total</span>
                            <span className="text-teal-600">₹{calculateTotal()}</span>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full mt-6 bg-teal-600 hover:bg-teal-700"
                          onClick={() => setCurrentStep('booking')}
                        >
                          Proceed to Book
                        </Button>

                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center text-sm text-gray-600">
                            <Shield className="w-4 h-4 mr-2" />
                            100% Safe & Secure
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Booking Form */}
              {currentStep === 'booking' && (
                <motion.div
                  key="booking"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                      {/* Customer Information */}
                      <Card className="p-6">
                        <h4 className="text-lg text-gray-900 mb-4">Contact Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={customerInfo.name}
                              onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                              placeholder="Enter your full name"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              value={customerInfo.phone}
                              onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                              placeholder="Enter your phone number"
                              className="mt-1"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={customerInfo.email}
                              onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                              placeholder="Enter your email address"
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </Card>

                      {/* Address */}
                      <Card className="p-6">
                        <h4 className="text-lg text-gray-900 mb-4">Service Address</h4>
                        <div>
                          <Label htmlFor="address">Complete Address *</Label>
                          <Textarea
                            id="address"
                            value={customerInfo.address}
                            onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                            placeholder="Enter your complete address with landmark"
                            className="mt-1"
                            rows={3}
                          />
                        </div>
                      </Card>

                      {/* Date & Time Selection */}
                      <Card className="p-6">
                        <h4 className="text-lg text-gray-900 mb-4">Select Date & Time</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label>Preferred Date *</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal mt-1"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={selectedDate}
                                  onSelect={setSelectedDate}
                                  disabled={(date) => date < new Date()}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div>
                            <Label>Time Slot *</Label>
                            <div className="grid grid-cols-1 gap-2 mt-1">
                              {timeSlots.map((slot) => (
                                <Button
                                  key={slot}
                                  variant={selectedTimeSlot === slot ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => setSelectedTimeSlot(slot)}
                                  className={selectedTimeSlot === slot ? "bg-teal-600 hover:bg-teal-700" : ""}
                                >
                                  {slot}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>

                      {/* Special Instructions */}
                      <Card className="p-6">
                        <h4 className="text-lg text-gray-900 mb-4">Special Instructions</h4>
                        <Textarea
                          value={customerInfo.specialInstructions}
                          onChange={(e) => setCustomerInfo({...customerInfo, specialInstructions: e.target.value})}
                          placeholder="Any special instructions or requirements..."
                          rows={3}
                        />
                      </Card>
                    </div>

                    {/* Booking Summary */}
                    <div className="lg:col-span-1">
                      <Card className="p-4 sticky top-4">
                        <h4 className="text-lg text-gray-900 mb-4">Booking Summary</h4>
                        
                        {selectedService && (
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <ImageWithFallback
                                src={selectedService.image}
                                alt={selectedService.name}
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-900">{selectedService.name}</h5>
                                <p className="text-sm text-gray-600">Qty: {quantity}</p>
                              </div>
                            </div>

                            <Separator />

                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Service Total</span>
                                <span>₹{selectedService.price * quantity}</span>
                              </div>
                              {selectedAddOns.map(addOnId => {
                                const addOn = selectedService.addOns?.find(a => a.id === addOnId);
                                return addOn ? (
                                  <div key={addOnId} className="flex justify-between">
                                    <span className="text-gray-600">{addOn.name}</span>
                                    <span>₹{addOn.price * quantity}</span>
                                  </div>
                                ) : null;
                              })}
                              <Separator />
                              <div className="flex justify-between text-lg font-medium">
                                <span>Total Amount</span>
                                <span className="text-teal-600">₹{calculateTotal()}</span>
                              </div>
                            </div>

                            {selectedDate && selectedTimeSlot && (
                              <>
                                <Separator />
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-center text-gray-600">
                                    <CalendarIcon className="w-4 h-4 mr-2" />
                                    {format(selectedDate, "PPP")}
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {selectedTimeSlot}
                                  </div>
                                </div>
                              </>
                            )}

                            <Button 
                              className="w-full bg-teal-600 hover:bg-teal-700"
                              onClick={() => setCurrentStep('confirmation')}
                              disabled={!customerInfo.name || !customerInfo.phone || !customerInfo.address || !selectedDate || !selectedTimeSlot}
                            >
                              Confirm Booking
                            </Button>

                            <div className="text-xs text-gray-500 text-center">
                              By booking, you agree to our terms of service
                            </div>
                          </div>
                        )}
                      </Card>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Confirmation */}
              {currentStep === 'confirmation' && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 text-center"
                >
                  <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    
                    <h3 className="text-2xl text-gray-900 mb-4">Booking Confirmed!</h3>
                    <p className="text-gray-600 mb-6">
                      Your service has been booked successfully. We'll send you a confirmation message shortly.
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                      <h4 className="font-medium text-gray-900 mb-3">Booking Details</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>Booking ID: <span className="font-medium">#BK{Date.now().toString().slice(-6)}</span></div>
                        <div>Service: <span className="font-medium">{selectedService?.name}</span></div>
                        <div>Date: <span className="font-medium">{selectedDate && format(selectedDate, "PPP")}</span></div>
                        <div>Time: <span className="font-medium">{selectedTimeSlot}</span></div>
                        <div>Total: <span className="font-medium text-teal-600">₹{calculateTotal()}</span></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleClose}>
                        Done
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Booking Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}