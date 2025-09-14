import { motion } from 'motion/react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Award,
  Clock
} from 'lucide-react';

const footerLinks = {
  'About Us': [
    'Our Story',
    'How It Works',
    'Careers',
    'Press',
    'Investor Relations'
  ],
  'Services': [
    'Home Cleaning',
    'Appliance Repair',
    'Plumbing',
    'Electrical',
    'Pest Control'
  ],
  'Trust & Safety': [
    'Background Checks',
    'Insurance Coverage',
    'Safety Guidelines',
    'Report Issues',
    'Service Guarantee'
  ],
  'Support': [
    'Help Center',
    'Contact Us',
    'Track Service',
    'Cancellation',
    'Refund Policy'
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-black text-sm">H</span>
                  </div>
                  <span className="text-2xl tracking-tight">HomeServe</span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Your trusted partner for all home services. Professional, reliable, and affordable solutions for every home.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-400">
                    <Phone className="w-4 h-4 mr-3 text-teal-400" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Mail className="w-4 h-4 mr-3 text-teal-400" />
                    <span>hello@homeserve.com</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-3 text-teal-400" />
                    <span>Mumbai, Delhi, Bangalore, Pune</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-gray-400 hover:text-teal-400 transition-colors duration-200 block"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <Shield className="w-6 h-6 text-teal-400 mr-3" />
              <div>
                <h4 className="text-sm">Verified Professionals</h4>
                <p className="text-xs text-gray-400">Background checked & insured</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Award className="w-6 h-6 text-teal-400 mr-3" />
              <div>
                <h4 className="text-sm">Service Guarantee</h4>
                <p className="text-xs text-gray-400">30-day satisfaction promise</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Clock className="w-6 h-6 text-teal-400 mr-3" />
              <div>
                <h4 className="text-sm">24/7 Support</h4>
                <p className="text-xs text-gray-400">Always here to help you</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-0"
            >
              <p className="text-gray-400 text-sm">
                © 2024 HomeServe. All rights reserved. 
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Made with Love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center py-4 border-t border-gray-800"
        >
          <p className="text-xs text-gray-500">
            Made with ❤️ for Indian homes
          </p>
        </motion.div>
      </div>
    </footer>
  );
}