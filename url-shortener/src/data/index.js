import { iconDetailed, brandRecognition, customizable } from '../assets/index';

export const navLinks = [
  {
    id: 1,
    name: 'Features',
    path: '/features',
    children: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    id: 2,
    name: 'Pricing',
    path: '/pricing',
    children: ['Blog', 'Developers', 'Support'],
  },
  {
    id: 3,
    name: 'Resources',
    path: '/resources',
    children: ['About', 'Our Team', 'Careers', 'Contact'],
  },
];

export const cardsDetails = [
  {
    id: 1,
    header: 'Brand Recognition',
    text: `Boost your brand recognition with each click. Generic links don’t 
    mean a thing. Branded links help instil confidence in your content.`,
    icon: brandRecognition,
  },
  {
    id: 2,
    header: 'Detailed Records',
    text: `Gain insights into who is clicking your links. Knowing when and where 
    people engage with your content helps inform better decisions.`,
    icon: iconDetailed,
  },
  {
    id: 3,
    header: 'Fully Customizable',
    text: `Improve brand awareness and content discoverability through customizable 
    links, supercharging audience engagement.`,
    icon: customizable,
  },
];
