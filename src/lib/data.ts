export const signatureDishes = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Shah-plow_azerbaijani.JPG/960px-Shah-plow_azerbaijani.JPG',
    name: 'Shah Plov',
    description: 'Traditional Azerbaijani pilaf with dried fruits, nuts, and tender lamb',
    price: '$25',
    category: 'Signature',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lamb_kebab.jpg/960px-Lamb_kebab.jpg',
    name: 'Tava Kebab',
    description: 'Pan-roasted lamb kebab with sumac, onions, and fresh herbs',
    price: '$22',
    category: 'Signature',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Dolma-Azerbaijan.jpg/960px-Dolma-Azerbaijan.jpg',
    name: 'Dolma',
    description: 'Grape leaves stuffed with rice, herbs, and seasoned minced meat',
    price: '$18',
    category: 'Signature',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Quba_paxlavas%C4%B1.jpg/960px-Quba_paxlavas%C4%B1.jpg',
    name: 'Pakhlava',
    description: 'Layered pastry with walnuts, honey, and fragrant cardamom syrup',
    price: '$12',
    category: 'Signature',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dushbara_Azerbaijani_cuisine.jpg/960px-Dushbara_Azerbaijani_cuisine.jpg',
    name: 'Dushbara',
    description: 'Mini dumplings in rich lamb broth with mint and vinegar',
    price: '$16',
    category: 'Signature',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/K%C3%BCk%C3%BC-Gutab_Azerbaijani.jpg/960px-K%C3%BCk%C3%BC-Gutab_Azerbaijani.jpg',
    name: 'Qutab',
    description: 'Thin pastry filled with fresh greens, herbs, and melted butter',
    price: '$14',
    category: 'Signature',
  },
]

export const menuCategories = [
  {
    name: 'Starters',
    items: [
      { name: 'Dolma', description: 'Grape leaves stuffed with rice and herbs', price: '$12' },
      { name: 'Qutab', description: 'Thin pastry with greens or meat filling', price: '$8' },
      { name: 'Lobya Fisincan', description: 'Walnut and bean pate with pomegranate', price: '$10' },
      { name: 'Eggplant Dolma', description: 'Stuffed eggplant with minced lamb', price: '$9' },
      { name: 'Savory Pastries', description: 'Selection of traditional baked pastries', price: '$11' },
    ],
  },
  {
    name: 'Main Courses',
    items: [
      { name: 'Shah Plov', description: 'Royal pilaf with dried fruits and nuts', price: '$25' },
      { name: 'Tava Kebab', description: 'Pan-roasted lamb with sumac and onions', price: '$22' },
      { name: 'Dushbara', description: 'Mini dumplings in rich lamb broth', price: '$16' },
      { name: 'Doshama Kebab', description: 'Kebab served on lavash bread', price: '$24' },
      { name: 'Fish Tava', description: 'Pan-seared seasonal fish with herbs', price: '$26' },
      { name: 'Sabzi', description: 'Herb stew with lamb and aromatic rice', price: '$20' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Pakhlava', description: 'Layered walnut pastry with honey syrup', price: '$12' },
      { name: 'Shekerbura', description: 'Crescent pastry with nut filling', price: '$8' },
      { name: 'Fetir', description: 'Flaky butter pastry with cream', price: '$9' },
      { name: 'Homemade Ice Cream', description: 'Vanilla, pistachio, or rosewater', price: '$7' },
      { name: 'Fruit Compote', description: 'Seasonal fruits in light syrup', price: '$6' },
    ],
  },
  {
    name: 'Drinks',
    items: [
      { name: 'Azerbaijani Tea', description: 'Traditional black tea in armudu glass', price: '$4' },
      { name: 'Ayran', description: 'Refreshing yogurt drink with mint', price: '$3' },
      { name: 'House Wine', description: 'Local red or white selection', price: '$14' },
      { name: 'Fresh Juice', description: 'Seasonal fruit blend', price: '$5' },
      { name: 'Mineral Water', description: 'Sparkling or still', price: '$2' },
    ],
  },
]

export const reviews = [
  {
    text: 'An unforgettable dining experience. The Shah Plov was absolutely divine, and the service was impeccable from start to finish. A true gem in Baku.',
    name: 'Sarah Mitchell',
    initials: 'SM',
    location: 'London, UK',
    rating: 5,
  },
  {
    text: 'The best Azerbaijani cuisine I have ever tasted outside of Baku. Every dish tells a story. The ambiance is sophisticated yet welcoming.',
    name: 'James Keller',
    initials: 'JK',
    location: 'New York, USA',
    rating: 5,
  },
  {
    text: 'We celebrated our anniversary at Baku Taste and it was perfect. The attention to detail, the flavors, the atmosphere — everything exceeded expectations.',
    name: 'Elena Rossi',
    initials: 'ER',
    location: 'Paris, France',
    rating: 5,
  },
]

export const stats = [
  { value: '6+', label: 'Years of Excellence' },
  { value: '15', label: 'Expert Chefs' },
  { value: '150+', label: 'Unique Dishes' },
  { value: '50K+', label: 'Happy Guests' },
]

export const contactInfo = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Nizami Street 125,\nBaku, Azerbaijan',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+994 12 555 12 12',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@baketaste.az',
  },
  {
    icon: '🕐',
    label: 'Hours',
    value: 'Mon–Fri: 10:00 – 23:00\nSat–Sun: 09:00 – 00:00',
  },
]
