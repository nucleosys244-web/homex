import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PopularServices } from './components/PopularServices';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ServiceBookingProvider } from './contexts/ServiceBookingContext';
import { ServiceCategoriesModal } from './components/ServiceCategoriesModal';
import { ServiceDetailsPage } from './components/ServiceDetailsPage';
import { useServiceBooking } from './contexts/ServiceBookingContext';

function AppContent() {
  const { 
    isCategoriesOpen, 
    selectedService, 
    closeCategories,
    isDetailsPageOpen,
    selectedCategory,
    openDetailsPage,
    closeDetailsPage
  } = useServiceBooking();

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content - Hidden when service details page is open */}
      <div className={isDetailsPageOpen ? 'hidden' : 'block'}>
        <Navbar />
        <main>
          <Hero />
          <PopularServices />
          <HowItWorks />
          <Testimonials />
        </main>
        <Footer />
      </div>
      
      {/* Service Categories Modal - Only show when not on details page */}
      {!isDetailsPageOpen && (
        <ServiceCategoriesModal
          isOpen={isCategoriesOpen}
          onClose={closeCategories}
          service={selectedService}
          onCategorySelect={openDetailsPage}
        />
      )}

      {/* Service Details Page - Full screen overlay */}
      <ServiceDetailsPage
        isOpen={isDetailsPageOpen}
        onClose={closeDetailsPage}
        service={selectedService}
        category={selectedCategory}
      />
    </div>
  );
}

export default function App() {
  return (
    <ServiceBookingProvider>
      <AppContent />
    </ServiceBookingProvider>
  );
}