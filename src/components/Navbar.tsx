import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import logo from "../data/newone.png";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Services', 'How It Works', 'Reviews', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
 <motion.div 
  className="flex items-center"
  whileHover={{ scale: 1.05 }}
>
  <img 
    src={logo} 
    alt="HomeServe Logo" 
    className="max-w-[187%] h-[65px] rounded-lg object-contain mr-2"
  />
</motion.div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 cursor-pointer"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6">
                Book Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full">
                Book Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}