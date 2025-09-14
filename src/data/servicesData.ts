import { 
  Home, 
  Sparkles, 
  ChefHat, 
  Wrench, 
  Zap, 
  Droplet, 
  Hammer, 
  Bug 
} from 'lucide-react';
import { MainService } from '../components/ServiceBookingFlow';

export const servicesData: MainService[] = [
  {
    id: 'home-cleaning',
    name: 'Home Cleaning',
    description: 'Professional home cleaning services',
    icon: Home,
    color: 'from-blue-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc1NzE3NTk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    categories: [
      {
        id: 'regular-cleaning',
        name: 'Regular Cleaning',
        description: 'Weekly and monthly home cleaning services',
        icon: '🏠',
        image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc1NzE3NTk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'weekly-cleaning',
            name: 'Weekly Home Cleaning',
            description: 'Complete house cleaning service including all rooms, dusting, mopping, and sanitization',
            price: 1299,
            originalPrice: 1599,
            duration: '3-4 hours',
            rating: 4.8,
            reviews: 2456,
            image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc1NzE3NTk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Living room and bedroom cleaning',
              'Kitchen cleaning (except inside appliances)',
              'Bathroom cleaning and sanitization', 
              'Floor mopping and vacuum cleaning',
              'Dusting of furniture and surfaces',
              'Trash removal',
              'Mirror and glass cleaning'
            ],
            addOns: [
              {
                id: 'appliance-cleaning',
                name: 'Appliance Deep Clean',
                price: 499,
                description: 'Inside cleaning of refrigerator, microwave, and oven'
              },
              {
                id: 'balcony-cleaning',
                name: 'Balcony Cleaning',
                price: 299,
                description: 'Complete balcony cleaning including floor and railings'
              }
            ]
          },
          {
            id: 'monthly-cleaning',
            name: 'Monthly Deep Cleaning',
            description: 'Comprehensive monthly cleaning with detailed attention to every corner',
            price: 2499,
            originalPrice: 2999,
            duration: '5-6 hours',
            rating: 4.9,
            reviews: 1834,
            image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc1NzE3NTk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'All rooms deep cleaning',
              'Kitchen appliances inside cleaning',
              'Bathroom deep scrubbing',
              'Window and door cleaning',
              'Light fixtures and fan cleaning',
              'Cabinet and drawer wiping',
              'Sofa and upholstery vacuuming'
            ]
          }
        ]
      },
      {
        id: 'move-in-out',
        name: 'Move-in/Move-out Cleaning',
        description: 'Specialized cleaning for new homes or moving out',
        icon: '📦',
        image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc1NzE3NTk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'move-in-cleaning',
            name: 'Move-in Deep Cleaning',
            description: 'Complete sanitization and cleaning for your new home',
            price: 3499,
            originalPrice: 3999,
            duration: '6-8 hours',
            rating: 4.7,
            reviews: 892,
            image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc1NzE3NTk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Complete house sanitization',
              'All surfaces deep cleaning',
              'Cabinet and storage cleaning',
              'Bathroom deep scrubbing',
              'Kitchen complete cleaning',
              'Floor deep cleaning and polishing',
              'Air vent cleaning'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    description: 'Specialized bathroom cleaning and sanitization',
    icon: Sparkles,
    color: 'from-purple-400 to-blue-500',
    image: 'https://images.unsplash.com/photo-1714479120969-436c216a3cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1NzIzNzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    categories: [
      {
        id: 'bathroom-deep-clean',
        name: 'Deep Cleaning',
        description: 'Intensive bathroom cleaning and sanitization',
        icon: '🚿',
        image: 'https://images.unsplash.com/photo-1714479120969-436c216a3cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1NzIzNzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'standard-bathroom-clean',
            name: 'Standard Bathroom Cleaning',
            description: 'Complete bathroom cleaning with sanitization',
            price: 699,
            originalPrice: 899,
            duration: '2-3 hours',
            rating: 4.9,
            reviews: 1834,
            image: 'https://images.unsplash.com/photo-1714479120969-436c216a3cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1NzIzNzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Toilet deep cleaning and disinfection',
              'Shower and bathtub scrubbing',
              'Tile and grout cleaning',
              'Mirror and glass cleaning', 
              'Floor mopping and sanitization',
              'Sink and faucet polishing',
              'Exhaust fan cleaning'
            ],
            addOns: [
              {
                id: 'tile-restoration',
                name: 'Tile Restoration',
                price: 599,
                description: 'Professional tile and grout restoration service'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    description: 'Professional kitchen cleaning services',
    icon: ChefHat,
    color: 'from-green-400 to-teal-500',
    image: 'https://images.unsplash.com/photo-1567767326925-e2047bf469d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzU3MjM3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    categories: [
      {
        id: 'kitchen-deep-clean',
        name: 'Deep Kitchen Cleaning',
        description: 'Comprehensive kitchen cleaning including appliances',
        icon: '🍳',
        image: 'https://images.unsplash.com/photo-1567767326925-e2047bf469d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzU3MjM3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'complete-kitchen-clean',
            name: 'Complete Kitchen Cleaning',
            description: 'Deep cleaning of entire kitchen including appliances',
            price: 999,
            originalPrice: 1299,
            duration: '3-4 hours',
            rating: 4.7,
            reviews: 1562,
            image: 'https://images.unsplash.com/photo-1567767326925-e2047bf469d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzU3MjM3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Appliance inside and outside cleaning',
              'Cabinet and drawer cleaning',
              'Countertop deep cleaning',
              'Sink and faucet descaling',
              'Chimney and exhaust cleaning',
              'Floor deep cleaning',
              'Tile and backsplash cleaning'
            ],
            addOns: [
              {
                id: 'chimney-deep-clean',
                name: 'Chimney Deep Clean',
                price: 799,
                description: 'Professional chimney cleaning and filter replacement'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    description: 'Expert appliance repair and maintenance',
    icon: Wrench,
    color: 'from-orange-400 to-red-500',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjByZXBhaXJ8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    categories: [
      {
        id: 'ac-services',
        name: 'AC Services',
        description: 'Air conditioner repair, service, and installation',
        icon: '❄️',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjByZXBhaXJ8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'ac-service',
            name: 'AC Service & Cleaning',
            description: 'Complete AC servicing including cleaning and gas check',
            price: 599,
            originalPrice: 799,
            duration: '1-2 hours',
            rating: 4.6,
            reviews: 2103,
            image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjByZXBhaXJ8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Filter cleaning and replacement',
              'Coil cleaning',
              'Gas pressure check',
              'Thermostat check',
              'Electrical connection check',
              'Performance testing'
            ],
            addOns: [
              {
                id: 'ac-gas-refill',
                name: 'AC Gas Refill',
                price: 1999,
                description: 'Complete AC gas refill with leak check'
              }
            ]
          }
        ]
      },
      {
        id: 'washing-machine',
        name: 'Washing Machine',
        description: 'Washing machine repair and maintenance',
        icon: '🧺',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjByZXBhaXJ8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'washing-machine-service',
            name: 'Washing Machine Service',
            description: 'Complete washing machine servicing and repair',
            price: 399,
            originalPrice: 599,
            duration: '1-2 hours',
            rating: 4.5,
            reviews: 1456,
            image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjByZXBhaXJ8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Drum cleaning and inspection',
              'Filter cleaning',
              'Water inlet check',
              'Drain pipe cleaning',
              'Motor and belt inspection',
              'Performance testing'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'electrician',
    name: 'Electrician',
    description: 'Professional electrical services and repairs',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    categories: [
      {
        id: 'switches-sockets',
        name: 'Switches & Sockets',
        description: 'Installation and repair of switches and sockets',
        icon: '🔌',
        image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'switch-socket-repair',
            name: 'Switch & Socket Repair',
            description: 'Repair and replacement of faulty switches and sockets',
            price: 199,
            originalPrice: 299,
            duration: '1-2 hours',
            rating: 4.8,
            reviews: 1923,
            image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Switch and socket testing',
              'Wiring inspection',
              'Replacement if needed',
              'Safety check',
              'Voltage testing',
              'Installation warranty'
            ]
          }
        ]
      },
      {
        id: 'fan-lights',
        name: 'Fans & Lights',
        description: 'Installation and repair of fans and lighting fixtures',
        icon: '💡',
        image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'fan-installation',
            name: 'Ceiling Fan Installation',
            description: 'Professional ceiling fan installation and repair',
            price: 299,
            originalPrice: 399,
            duration: '1-2 hours',
            rating: 4.7,
            reviews: 1654,
            image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Fan unboxing and assembly',
              'Ceiling mount installation',
              'Wiring and electrical connection',
              'Speed regulator connection',
              'Balance and stability check',
              'Performance testing'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'plumber',
    name: 'Plumber',
    description: 'Expert plumbing services and repairs',
    icon: Droplet,
    color: 'from-indigo-400 to-purple-500',
    image: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcmVwYWlyfGVufDF8fHx8MTc1NzIzNzEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    categories: [
      {
        id: 'tap-repair',
        name: 'Tap & Pipe Repair',
        description: 'Fixing leaky taps, pipes, and water connections',
        icon: '🚰',
        image: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcmVwYWlyfGVufDF8fHx8MTc1NzIzNzEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'tap-repair-service',
            name: 'Tap Repair Service',
            description: 'Fix leaky taps, replace washers and repair water connections',
            price: 299,
            originalPrice: 449,
            duration: '1-2 hours',
            rating: 4.7,
            reviews: 1678,
            image: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcmVwYWlyfGVufDF8fHx8MTc1NzIzNzEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Tap leak diagnosis',
              'Washer and O-ring replacement',
              'Pipe connection check',
              'Water pressure testing',
              'Valve replacement if needed',
              'Water flow optimization'
            ]
          }
        ]
      },
      {
        id: 'toilet-repair',
        name: 'Toilet Repair',
        description: 'Toilet installation, repair, and maintenance',
        icon: '🚽',
        image: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcmVwYWlyfGVufDF8fHx8MTc1NzIzNzEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'toilet-repair-service',
            name: 'Toilet Repair Service',
            description: 'Fix toilet flush, seat repair, and drainage issues',
            price: 399,
            originalPrice: 599,
            duration: '1-2 hours',
            rating: 4.6,
            reviews: 1342,
            image: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcmVwYWlyfGVufDF8fHx8MTc1NzIzNzEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Flush mechanism repair',
              'Toilet seat fixing',
              'Drain pipe cleaning',
              'Water tank inspection',
              'Seal replacement',
              'Functionality testing'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'carpenter',
    name: 'Carpenter',
    description: 'Professional carpentry and furniture services',
    icon: Hammer,
    color: 'from-amber-400 to-orange-500',
    image: 'https://images.unsplash.com/photo-1626081062126-d3b192c1fcb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya3xlbnwxfHx8fDE3NTcyMDU5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    categories: [
      {
        id: 'furniture-repair',
        name: 'Furniture Repair',
        description: 'Repair and restoration of wooden furniture',
        icon: '🪑',
        image: 'https://images.unsplash.com/photo-1626081062126-d3b192c1fcb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya3xlbnwxfHx8fDE3NTcyMDU5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'furniture-repair-service',
            name: 'Furniture Repair Service',
            description: 'Professional repair of wooden furniture, doors, and cabinets',
            price: 499,
            originalPrice: 699,
            duration: '2-3 hours',
            rating: 4.5,
            reviews: 987,
            image: 'https://images.unsplash.com/photo-1626081062126-d3b192c1fcb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya3xlbnwxfHx8fDE3NTcyMDU5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Furniture damage assessment',
              'Wood repair and filling',
              'Hinge and handle repair',
              'Polish and finishing',
              'Hardware replacement',
              'Structural strengthening'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    description: 'Professional pest control and extermination',
    icon: Bug,
    color: 'from-red-400 to-pink-500',
    image: 'https://images.unsplash.com/photo-1632982892992-159aca0ac9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    categories: [
      {
        id: 'general-pest-control',
        name: 'General Pest Control',
        description: 'Comprehensive pest control for cockroaches, ants, and other insects',
        icon: '🐜',
        image: 'https://images.unsplash.com/photo-1632982892992-159aca0ac9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        services: [
          {
            id: 'general-pest-treatment',
            name: 'General Pest Control Treatment',
            description: 'Complete home pest control treatment for common household pests',
            price: 799,
            originalPrice: 999,
            duration: '2-3 hours',
            rating: 4.4,
            reviews: 756,
            image: 'https://images.unsplash.com/photo-1632982892992-159aca0ac9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3MjM3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            includes: [
              'Cockroach treatment',
              'Ant control',
              'Spider treatment',
              'Flying insect control',
              'Safe, odorless chemicals',
              '30-day warranty',
              'Follow-up service'
            ]
          }
        ]
      }
    ]
  }
];