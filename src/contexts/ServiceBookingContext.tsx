import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MainService, ServiceCategory } from '../components/ServiceBookingFlow';

interface ServiceBookingContextType {
  // Categories Modal
  isCategoriesOpen: boolean;
  selectedService: MainService | null;
  openCategories: (service: MainService) => void;
  closeCategories: () => void;
  
  // Service Details Page
  isDetailsPageOpen: boolean;
  selectedCategory: ServiceCategory | null;
  openDetailsPage: (service: MainService, category: ServiceCategory) => void;
  closeDetailsPage: () => void;
}

const ServiceBookingContext = createContext<ServiceBookingContextType | undefined>(undefined);

export function ServiceBookingProvider({ children }: { children: ReactNode }) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isDetailsPageOpen, setIsDetailsPageOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<MainService | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  const openCategories = (service: MainService) => {
    setSelectedService(service);
    setIsCategoriesOpen(true);
  };

  const closeCategories = () => {
    setIsCategoriesOpen(false);
    setSelectedService(null);
  };

  const openDetailsPage = (service: MainService, category: ServiceCategory) => {
    // Close categories modal first
    setIsCategoriesOpen(false);
    
    // Then open details page
    setSelectedService(service);
    setSelectedCategory(category);
    setIsDetailsPageOpen(true);
  };

  const closeDetailsPage = () => {
    setIsDetailsPageOpen(false);
    setSelectedService(null);
    setSelectedCategory(null);
    // Don't automatically reopen categories - user returns to home page
  };

  return (
    <ServiceBookingContext.Provider value={{
      isCategoriesOpen,
      selectedService,
      openCategories,
      closeCategories,
      isDetailsPageOpen,
      selectedCategory,
      openDetailsPage,
      closeDetailsPage
    }}>
      {children}
    </ServiceBookingContext.Provider>
  );
}

export function useServiceBooking() {
  const context = useContext(ServiceBookingContext);
  if (context === undefined) {
    throw new Error('useServiceBooking must be used within a ServiceBookingProvider');
  }
  return context;
}