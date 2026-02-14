export type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
};

export const services: Service[] = [
  {
    id: '1',
    title: 'Pipe Leakage Fix',
    description: 'Professional plumbing repair for leaks.',
    price: 499,
    category: 'Plumbing',
  },
  {
    id: '2',
    title: 'Bathroom Deep Cleaning',
    description: 'Complete deep cleaning service.',
    price: 799,
    category: 'Cleaning',
  },
  {
    id: '3',
    title: 'AC Gas Refill',
    description: 'Refill and performance check.',
    price: 1299,
    category: 'AC Repair',
  },
  {
    id: '4',
    title: 'Wall Painting',
    description: 'Interior wall painting service.',
    price: 2999,
    category: 'Painting',
  },
  {
    id: '5',
    title: 'Kitchen Deep Cleaning',
    description: 'Degreasing of stove, chimney, and cabinets.',
    price: 1499,
    category: 'Cleaning',
  },
  {
    id: '6',
    title: 'Tap & Mixer Repair',
    description: 'Fixing dripping taps or installing new mixers.',
    price: 299,
    category: 'Plumbing',
  },
  {
    id: '7',
    title: 'Ceiling Fan Installation',
    description: 'Assembly and mounting of ceiling fans.',
    price: 199,
    category: 'Electrical',
  },
  {
    id: '8',
    title: 'Switchboard Repair',
    description: 'Fixing loose connections or replacing burnt switches.',
    price: 249,
    category: 'Electrical',
  },
  {
    id: '9',
    title: 'Full House Sofa Cleaning',
    description: 'Shampooing and vacuuming of 3+2 seater sofas.',
    price: 999,
    category: 'Cleaning',
  },
  {
    id: '10',
    title: 'AC Service (Jet Wash)',
    description: 'Deep cleaning of indoor and outdoor units.',
    price: 599,
    category: 'AC Repair',
  },
  {
    id: '11',
    title: 'Wall Drill & Hang',
    description: 'Hanging paintings, clocks, or TV mounting.',
    price: 149,
    category: 'Handyman',
  },
  {
    id: '12',
    title: 'Washing Machine Repair',
    description: 'Diagnosis and fixing of motor or drum issues.',
    price: 450,
    category: 'Appliances',
  },
  {
    id: '13',
    title: 'Refrigerator Gas Charging',
    description: 'Fixing cooling issues and gas refill.',
    price: 1899,
    category: 'Appliances',
  },
  {
    id: '14',
    title: 'Microwave Repair',
    description: 'Fixing heating elements or touch panels.',
    price: 399,
    category: 'Appliances',
  },
  {
    id: '15',
    title: 'Full Home Painting',
    description: 'End-to-end interior painting for 2BHK/3BHK.',
    price: 15000,
    category: 'Painting',
  },
  {
    id: '16',
    title: 'Pest Control (General)',
    description: 'Treatment for cockroaches, ants, and spiders.',
    price: 899,
    category: 'Pest Control',
  },
  {
    id: '17',
    title: 'Termite Control',
    description: 'Deep wood injection treatment for termites.',
    price: 2499,
    category: 'Pest Control',
  },
  {
    id: '18',
    title: 'Water Tank Cleaning',
    description: 'Mechanical scrubbing and UV treatment.',
    price: 799,
    category: 'Cleaning',
  },
  {
    id: '19',
    title: 'Door Lock Installation',
    description: 'Fitting new mortice or electronic locks.',
    price: 499,
    category: 'Handyman',
  },
  {
    id: '20',
    title: 'Full Home Sanitization',
    description: 'Hospital-grade disinfectant spray for all rooms.',
    price: 1199,
    category: 'Cleaning',
  },
  {
    id: '21',
    title: 'Drainage Unclogging',
    description: 'Clearing blocked kitchen or bathroom pipes.',
    price: 349,
    category: 'Plumbing',
  },
  {
    id: '22',
    title: 'Inverter Servicing',
    description: 'Battery water top-up and wiring check.',
    price: 299,
    category: 'Electrical',
  },
  {
    id: '23',
    title: 'Laptop Deep Clean',
    description: 'Internal dust removal and thermal paste apply.',
    price: 699,
    category: 'Gadgets',
  },
  {
    id: '24',
    title: 'Furniture Assembly',
    description: 'Building IKEA-style beds or wardrobes.',
    price: 1200,
    category: 'Handyman',
  },
  // 7. Handyman
  { id: '25', title: 'TV Wall Mounting', description: 'Safe mounting for LED/OLED TVs.', price: 399, category: 'Handyman' },

  // 8. Pest Control
  { id: '26', title: 'Bed Bug Treatment', description: 'Intensive chemical spray for bedrooms.', price: 1599, category: 'Pest Control' },

  // 9. Gadget Repair
  { id: '27', title: 'iPhone Screen Replacement', description: 'Original-grade screen fitting.', price: 4500, category: 'Gadget Repair' },

  // 10. Beauty & Salon
  { id: '28', title: 'Mens Haircut & Grooming', description: 'Style cut and beard shaping at home.', price: 499, category: 'Beauty & Salon' },

  // 11. Massage
  { id: '29', title: 'Stress Relief Massage', description: '60 min full body oil massage.', price: 1299, category: 'Massage' },

  // 12. Gardening
  { id: '30', title: 'Balcony Garden Setup', description: 'Soil mixing and 5 plant installation.', price: 2500, category: 'Gardening' },

  // 13. Carpentry
  { id: '31', title: 'Hinge & Handle Repair', description: 'Fixing loose cabinet doors and handles.', price: 199, category: 'Carpentry' },

  // 14. Car Wash
  { id: '32', title: 'Full Car Detail', description: 'Exterior wash and interior vacuuming.', price: 899, category: 'Car Wash' },

  // 15. Laundry
  { id: '33', title: 'Wash & Iron (10kg)', description: 'Daily wear cleaning and pressing.', price: 599, category: 'Laundry' },

  // 16. Packers & Movers
  { id: '34', title: 'Local Shift (1 BHK)', description: 'Packing, loading, and transportation.', price: 6500, category: 'Packers & Movers' },

  // 17. Home Security
  { id: '35', title: 'CCTV Camera Install', description: 'Installation and mobile app setup.', price: 999, category: 'Home Security' },

  // 18. Tailoring
  { id: '36', title: 'Blouse/Shirt Alteration', description: 'Fitting and stitch adjustment.', price: 250, category: 'Tailoring' },

  // 19. Fitness Trainer
  { id: '37', title: 'Personal Yoga Session', description: '1-on-1 home yoga for 1 hour.', price: 800, category: 'Fitness Trainer' },

  // 20. Event Decor
  { id: '38', title: 'Birthday Balloon Decor', description: 'Theme-based wall decoration.', price: 1999, category: 'Event Decor' },
];
